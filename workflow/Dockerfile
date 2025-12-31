# Stage 1: Build
FROM golang:1.23-alpine AS builder

WORKDIR /app

# Copy go mod files
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Build static binary
RUN CGO_ENABLED=0 GOOS=linux go build -o workflow main.go

# Stage 2: Runtime
FROM alpine:latest

# Install dependencies
RUN apk --no-cache add \
    ca-certificates \
    git \
    bash

WORKDIR /root/

# Copy binary and sync script from builder
COPY --from=builder /app/workflow .
COPY --from=builder /app/sync.sh .

# Make sync script executable
RUN chmod +x sync.sh

# Run sync script (which runs workflow + git sync)
CMD ["./sync.sh"]
