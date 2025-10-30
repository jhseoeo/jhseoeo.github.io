# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Notion-based blog system consisting of three main components that work together to automatically sync Notion pages to a static blog site.

## Architecture

The project is organized into three main components:

### 1. Terraform (`terraform/` or `infra/`)
Defines AWS cloud infrastructure resources:
- **EventBridge**: Schedules workflow to run periodically
- **ECR**: Stores Docker images for the workflow
- **ECS**: Executes the workflow container
- **KMS**: Encrypts sensitive data (Notion API keys, GitHub tokens)

### 2. Workflow (`workflow/` or `sync/`)
Automated pipeline that:
1. Imports Notion pages using the Notion API
2. Parses Notion content to Markdown
3. Exports to MDsveX format (Markdown for Svelte)
4. Pushes processed content to GitHub repository

This workflow runs on a schedule via ECS tasks triggered by EventBridge.

### 3. Blog (`blog/` or `site/`)
SvelteKit-based static site generator:
- Consumes MDsveX files from the workflow output
- Generates static HTML for deployment
- Serves as the public-facing blog frontend

## Data Flow

```
Notion Pages → Workflow (API fetch) → Markdown parsing → MDsveX export → GitHub → SvelteKit build → Static site
```

## Development Context

When working on this codebase:
- **Workflow changes** may require updating the Docker image and pushing to ECR
- **Infrastructure changes** require Terraform apply with appropriate AWS credentials
- **Blog changes** should be tested locally with SvelteKit dev server before deployment
- The workflow should be idempotent - multiple runs should produce consistent results
- Notion API rate limits should be considered when modifying the sync workflow

## Important Notes

### 404 Error Handling During Prerender
The blog uses SvelteKit's prerender feature to generate static pages. However, blog post content is populated by the workflow (synced from Notion), which may not be present during local builds.

**Issue**: During `npm run build`, SvelteKit tries to prerender all routes, including blog post links found in the index page. If the actual Markdown files don't exist in `src/routes/posts/post/`, the build fails with 404 errors.

**Solution**: Added `handleHttpError` in `svelte.config.js` to gracefully ignore 404 errors during prerender:

```javascript
prerender: {
  handleHttpError: ({ status, path }) => {
    if (status === 404) {
      console.warn(`Ignoring 404 for ${path}`);
      return;
    }
    throw new Error(`${status} ${path}`);
  }
}
```

This allows the build to complete successfully even when blog post content hasn't been synced yet. In production, the workflow will populate the content before the build runs.
