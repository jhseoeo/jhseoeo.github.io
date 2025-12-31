# AWS Systems Manager Parameter Store for ALL configuration (FREE!)
# Using SecureString type for encryption with AWS managed KMS key

resource "aws_ssm_parameter" "notion_secret" {
  name        = "/${var.project_name}/notion-secret"
  description = "Notion API secret token"
  type        = "SecureString"  # Encrypted with KMS
  value       = var.notion_secret

  tags = {
    Project = var.project_name
  }
}

resource "aws_ssm_parameter" "github_token" {
  name        = "/${var.project_name}/github-token"
  description = "GitHub Personal Access Token"
  type        = "SecureString"  # Encrypted with KMS
  value       = var.github_token

  tags = {
    Project = var.project_name
  }
}

resource "aws_ssm_parameter" "notion_db_id" {
  name        = "/${var.project_name}/notion-db-id"
  description = "Notion database ID"
  type        = "String"
  value       = var.notion_db_id

  tags = {
    Project = var.project_name
  }
}

resource "aws_ssm_parameter" "github_repo" {
  name        = "/${var.project_name}/github-repo"
  description = "GitHub repository URL"
  type        = "String"
  value       = var.github_repo

  tags = {
    Project = var.project_name
  }
}
