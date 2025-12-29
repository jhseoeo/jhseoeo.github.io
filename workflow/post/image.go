package post

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/jhseoeo/notion-blog/workflow/model"
	"github.com/sirupsen/logrus"
)

// DownloadImage downloads an image from a URL and saves it to the specified directory
// Returns the relative path to the saved image
func DownloadImage(imageURL, outputDir, postSlug string) (string, error) {
	// Create images directory for this post
	imagesDir := filepath.Join(outputDir, "images", postSlug)
	if err := os.MkdirAll(imagesDir, 0755); err != nil {
		return "", fmt.Errorf("failed to create images directory: %w", err)
	}

	// Generate filename from URL hash to avoid duplicates
	hash := sha256.Sum256([]byte(imageURL))
	hashStr := hex.EncodeToString(hash[:])[:16]

	// Extract extension from URL (before query params)
	ext := ".png" // default
	urlPath := imageURL
	if idx := strings.Index(urlPath, "?"); idx != -1 {
		urlPath = urlPath[:idx]
	}
	if strings.HasSuffix(urlPath, ".jpg") || strings.HasSuffix(urlPath, ".jpeg") {
		ext = ".jpg"
	} else if strings.HasSuffix(urlPath, ".png") {
		ext = ".png"
	} else if strings.HasSuffix(urlPath, ".gif") {
		ext = ".gif"
	} else if strings.HasSuffix(urlPath, ".webp") {
		ext = ".webp"
	}

	filename := hashStr + ext
	filepath := filepath.Join(imagesDir, filename)

	// Check if file already exists
	if _, err := os.Stat(filepath); err == nil {
		logrus.Debugf("Image already exists: %s", filename)
		return fmt.Sprintf("/images/%s/%s", postSlug, filename), nil
	}

	// Download image
	logrus.Infof("Downloading image: %s", imageURL)
	resp, err := http.Get(imageURL)
	if err != nil {
		return "", fmt.Errorf("failed to download image: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("failed to download image: status %d", resp.StatusCode)
	}

	// Save image to file
	file, err := os.Create(filepath)
	if err != nil {
		return "", fmt.Errorf("failed to create image file: %w", err)
	}
	defer file.Close()

	if _, err := io.Copy(file, resp.Body); err != nil {
		return "", fmt.Errorf("failed to save image: %w", err)
	}

	logrus.Infof("Saved image: %s", filename)
	return fmt.Sprintf("/images/%s/%s", postSlug, filename), nil
}

// DownloadImagesInBlocks recursively downloads all images in blocks and replaces URLs with local paths
func DownloadImagesInBlocks(blocks []*model.Block, outputDir, postSlug string) error {
	for _, block := range blocks {
		if block.Type == model.ContentTypeImage && block.Content.Image != nil {
			imageURL := block.Content.Image.File.URL
			if imageURL != "" {
				localPath, err := DownloadImage(imageURL, outputDir, postSlug)
				if err != nil {
					logrus.Warnf("Failed to download image %s: %v", imageURL, err)
					// Continue with original URL on error
				} else {
					// Replace URL with local path
					block.Content.Image.File.URL = localPath
				}
			}
		}

		// Process children recursively
		if len(block.Children) > 0 {
			if err := DownloadImagesInBlocks(block.Children, outputDir, postSlug); err != nil {
				return err
			}
		}
	}
	return nil
}
