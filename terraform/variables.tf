variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "notion-blog-sync"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-northeast-2"
}

variable "schedule_expression" {
  description = "EventBridge schedule expression (cron format)"
  type        = string
  default     = "cron(0 15 * * ? *)" # 매일 자정 KST (15:00 UTC)
}

variable "notion_secret" {
  description = "Notion API secret token"
  type        = string
  sensitive   = true
}

variable "notion_db_id" {
  description = "Notion database ID"
  type        = string
  sensitive   = true
}

variable "github_token" {
  description = "GitHub Personal Access Token for repository access"
  type        = string
  sensitive   = true
}

variable "github_repo" {
  description = "GitHub repository URL"
  type        = string
}

variable "git_user_name" {
  description = "Git commit author name"
  type        = string
  default     = "Notion Blog Sync Bot"
}

variable "git_user_email" {
  description = "Git commit author email"
  type        = string
}
