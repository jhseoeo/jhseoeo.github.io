#!/bin/bash
set -e  # Exit on error

echo "=== Starting Notion Blog Sync ==="

# Step 1: Run Go workflow to fetch from Notion and generate files
echo "Step 1: Fetching from Notion and generating posts..."
./workflow

# Check if workflow succeeded
if [ $? -ne 0 ]; then
    echo "ERROR: Workflow execution failed"
    exit 1
fi

echo "Step 1: Complete ✓"

# Step 2: Push to GitHub (if configured)
if [ -z "$GITHUB_REPO" ] || [ -z "$GITHUB_TOKEN" ]; then
    echo "GitHub credentials not set, skipping push"
    exit 0
fi

echo "Step 2: Syncing to GitHub..."

# Create temp directory
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

# Insert token into repo URL for authentication
# https://github.com/user/repo.git → https://TOKEN@github.com/user/repo.git
AUTH_REPO=$(echo "$GITHUB_REPO" | sed "s|https://|https://${GITHUB_TOKEN}@|")

# Clone repository
echo "Cloning repository..."
cd "$TEMP_DIR"
git clone "$AUTH_REPO" repo
cd repo

# Configure git
git config user.name "${GIT_USER_NAME:-Notion Blog Sync Bot}"
git config user.email "${GIT_USER_EMAIL:-noreply@example.com}"

# Checkout posts branch (create if doesn't exist)
echo "Switching to posts branch..."
git fetch origin
if git rev-parse --verify origin/posts >/dev/null 2>&1; then
    # posts branch exists on remote
    git checkout posts
else
    # posts branch doesn't exist, create from master
    git checkout -b posts
fi

# Copy output files to blog/src/posts/
echo "Copying files..."
mkdir -p blog/src/posts
cp -r /root/output/* blog/src/posts/

# Check for changes
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit"
    exit 0
fi

# Commit and push
echo "Committing changes..."
git add .
COMMIT_MSG="Update blog posts - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo "Pushing to GitHub (posts branch)..."
git push -u origin posts

echo "Step 2: Complete ✓"
echo "=== Sync Successful ==="
