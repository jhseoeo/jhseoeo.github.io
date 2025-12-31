# ECS Task Execution Role - Allows ECS to pull images and send logs
resource "aws_iam_role" "ecs_execution" {
  name = "${var.project_name}-ecs-execution"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Principal = {
        Service = "ecs-tasks.amazonaws.com"
      }
      Effect = "Allow"
    }]
  })

  tags = {
    Project = var.project_name
  }
}

# Attach AWS managed policy for ECS task execution
resource "aws_iam_role_policy_attachment" "ecs_execution_policy" {
  role       = aws_iam_role.ecs_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# Custom policy for accessing SSM Parameter Store
resource "aws_iam_role_policy" "ecs_execution_secrets" {
  name = "ssm-parameters-access"
  role = aws_iam_role.ecs_execution.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "ssm:GetParameters",
        "ssm:GetParameter"
      ]
      Resource = [
        "arn:aws:ssm:${var.aws_region}:*:parameter/${var.project_name}/*"
      ]
    }]
  })
}

# ECS Task Role - Allows the task itself to access AWS services
resource "aws_iam_role" "ecs_task" {
  name = "${var.project_name}-ecs-task"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Principal = {
        Service = "ecs-tasks.amazonaws.com"
      }
      Effect = "Allow"
    }]
  })

  tags = {
    Project = var.project_name
  }
}

# EventBridge Role - Allows EventBridge to trigger ECS tasks
resource "aws_iam_role" "eventbridge" {
  name = "${var.project_name}-eventbridge"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Principal = {
        Service = "events.amazonaws.com"
      }
      Effect = "Allow"
    }]
  })

  tags = {
    Project = var.project_name
  }
}

# Policy allowing EventBridge to run ECS tasks
resource "aws_iam_role_policy" "eventbridge_ecs" {
  name = "ecs-run-task"
  role = aws_iam_role.eventbridge.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = "ecs:RunTask"
      Resource = [
        "arn:aws:ecs:${var.aws_region}:*:task-definition/${var.project_name}:*"
      ]
    }, {
      Effect = "Allow"
      Action = "iam:PassRole"
      Resource = [
        aws_iam_role.ecs_execution.arn,
        aws_iam_role.ecs_task.arn
      ]
    }]
  })
}
