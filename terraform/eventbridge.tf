# EventBridge Rule for daily scheduling
resource "aws_cloudwatch_event_rule" "daily_sync" {
  name                = "${var.project_name}-daily"
  description         = "Trigger Notion sync daily at midnight KST"
  schedule_expression = var.schedule_expression

  tags = {
    Project = var.project_name
  }
}

# EventBridge Target - Trigger ECS Task
resource "aws_cloudwatch_event_target" "ecs_task" {
  rule      = aws_cloudwatch_event_rule.daily_sync.name
  arn       = aws_ecs_cluster.main.arn
  role_arn  = aws_iam_role.eventbridge.arn

  ecs_target {
    task_count          = 1
    task_definition_arn = aws_ecs_task_definition.workflow.arn
    launch_type         = "FARGATE"
    platform_version    = "LATEST"

    network_configuration {
      subnets = [
        aws_subnet.public_a.id,
        aws_subnet.public_c.id
      ]
      assign_public_ip = true
      security_groups  = [aws_security_group.ecs_task.id]
    }
  }
}
