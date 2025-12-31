# VPC ID
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

# ECR Repository URL - needed for docker push
output "ecr_repository_url" {
  description = "ECR repository URL for pushing Docker images"
  value       = aws_ecr_repository.workflow.repository_url
}

# ECS Cluster Name
output "ecs_cluster_name" {
  description = "ECS cluster name"
  value       = aws_ecs_cluster.main.name
}

# ECS Task Definition ARN
output "ecs_task_definition_arn" {
  description = "ECS task definition ARN"
  value       = aws_ecs_task_definition.workflow.arn
}

# CloudWatch Log Group Name
output "log_group_name" {
  description = "CloudWatch log group name for viewing logs"
  value       = aws_cloudwatch_log_group.workflow.name
}

# EventBridge Rule Name
output "eventbridge_rule_name" {
  description = "EventBridge rule name for scheduling"
  value       = aws_cloudwatch_event_rule.daily_sync.name
}

# Subnet IDs (for manual ECS task runs)
output "subnet_ids" {
  description = "Subnet IDs for ECS task network configuration"
  value = [
    aws_subnet.public_a.id,
    aws_subnet.public_c.id
  ]
}

# Security Group ID (for manual ECS task runs)
output "security_group_id" {
  description = "Security group ID for ECS task"
  value       = aws_security_group.ecs_task.id
}
