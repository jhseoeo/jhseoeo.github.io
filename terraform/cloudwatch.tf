# CloudWatch Log Group for ECS task logs
resource "aws_cloudwatch_log_group" "workflow" {
  name              = "/ecs/${var.project_name}"
  retention_in_days = 7

  tags = {
    Project = var.project_name
  }
}
