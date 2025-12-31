# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "${var.project_name}-cluster"

  tags = {
    Project = var.project_name
  }
}

# ECS Task Definition
resource "aws_ecs_task_definition" "workflow" {
  family                   = var.project_name
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"  # 0.25 vCPU
  memory                   = "512"  # 512 MB
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([{
    name  = "workflow"
    image = "${aws_ecr_repository.workflow.repository_url}:latest"

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = aws_cloudwatch_log_group.workflow.name
        "awslogs-region"        = var.aws_region
        "awslogs-stream-prefix" = "ecs"
      }
    }

    secrets = [
      {
        name      = "NOTION_SECRET"
        valueFrom = aws_ssm_parameter.notion_secret.arn
      },
      {
        name      = "GITHUB_TOKEN"
        valueFrom = aws_ssm_parameter.github_token.arn
      }
    ]

    environment = [
      {
        name  = "NOTION_DB_ID"
        value = var.notion_db_id
      },
      {
        name  = "GITHUB_REPO"
        value = var.github_repo
      },
      {
        name  = "GIT_USER_NAME"
        value = var.git_user_name
      },
      {
        name  = "GIT_USER_EMAIL"
        value = var.git_user_email
      }
    ]
  }])

  tags = {
    Project = var.project_name
  }
}

# Security Group for ECS Task
resource "aws_security_group" "ecs_task" {
  name        = "${var.project_name}-ecs-task"
  description = "Allow outbound traffic for ECS task"
  vpc_id      = aws_vpc.main.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow all outbound traffic"
  }

  tags = {
    Project = var.project_name
  }
}
