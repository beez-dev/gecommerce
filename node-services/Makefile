# Node Services Makefile
# Build all services in the correct dependency order

# Directories
CONFIG_DIR = config
SCHEMAS_DIR = schemas
CUSTOMER_DIR = customer
MIGRATIONS_DIR = migrations

# Default target
.PHONY: all
all: build-all

# Build all services in dependency order
.PHONY: build-all
build-all: build-config build-schemas build-customer build-migrations
	@echo "✅ All services built successfully!"

# Build config package (dependency for other services)
.PHONY: build-config
build-config:
	@echo "🔨 Building config package..."
	@cd $(CONFIG_DIR) && npm run build
	@echo "✅ Config package built successfully!"

# Build schemas package
.PHONY: build-schemas
build-schemas:
	@echo "🔨 Building schemas package..."
	@cd $(SCHEMAS_DIR) && npm run build
	@echo "✅ Schemas package built successfully!"

# Build customer service (depends on config and schemas)
.PHONY: build-customer
build-customer: build-config build-schemas
	@echo "🔨 Building customer service..."
	@cd $(CUSTOMER_DIR) && npm run build
	@echo "✅ Customer service built successfully!"

# Build migrations package
.PHONY: build-migrations
build-migrations: build-config
	@echo "🔨 Building migrations package..."
	@cd $(MIGRATIONS_DIR) && npm run build
	@echo "✅ Migrations package built successfully!"

# Install dependencies for all services
.PHONY: install-all
install-all:
	@echo "📦 Installing dependencies for all services..."
	@cd $(CONFIG_DIR) && npm install
	@cd $(SCHEMAS_DIR) && npm install
	@cd $(CUSTOMER_DIR) && npm install
	@cd $(MIGRATIONS_DIR) && npm install
	@echo "✅ All dependencies installed!"

# Clean all build artifacts
.PHONY: clean-all
clean-all:
	@echo "🧹 Cleaning all build artifacts..."
	@cd $(CONFIG_DIR) && rm -rf dist node_modules
	@cd $(SCHEMAS_DIR) && rm -rf dist node_modules
	@cd $(CUSTOMER_DIR) && rm -rf dist node_modules
	@cd $(MIGRATIONS_DIR) && rm -rf dist node_modules
	@echo "✅ All build artifacts cleaned!"

# Development commands
.PHONY: dev-config
dev-config:
	@echo "🚀 Starting config package in watch mode..."
	@cd $(CONFIG_DIR) && npm run dev:watch

.PHONY: dev-schemas
dev-schemas:
	@echo "🚀 Starting schemas package in watch mode..."
	@cd $(SCHEMAS_DIR) && npm run dev:watch

.PHONY: dev-customer
dev-customer:
	@echo "🚀 Starting customer service in development mode..."
	@cd $(CUSTOMER_DIR) && npm run start:dev

# Database migration commands
.PHONY: migrate-make
migrate-make:
	@echo "📝 Creating new migration..."
	@cd $(MIGRATIONS_DIR) && npm run migrate:make

.PHONY: migrate-up
migrate-up:
	@echo "⬆️ Running migrations up..."
	@cd $(MIGRATIONS_DIR) && npm run migrate:up

.PHONY: migrate-down
migrate-down:
	@echo "⬇️ Running migrations down..."
	@cd $(MIGRATIONS_DIR) && npm run migrate:down

.PHONY: migrate-status
migrate-status:
	@echo "📊 Checking migration status..."
	@cd $(MIGRATIONS_DIR) && npm run migrate:status

# Help command
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  build-all      - Build all services in dependency order"
	@echo "  install-all    - Install dependencies for all services"
	@echo "  clean-all      - Clean all build artifacts"
	@echo "  dev-config     - Start config package in watch mode"
	@echo "  dev-schemas    - Start schemas package in watch mode"
	@echo "  dev-customer   - Start customer service in development mode"
	@echo "  migrate-make   - Create new migration file"
	@echo "  migrate-up     - Run migrations up"
	@echo "  migrate-down   - Run migrations down"
	@echo "  migrate-status - Check migration status"
	@echo "  help           - Show this help message" 