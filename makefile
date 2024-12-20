# Variables
NODE_ENV = development

# Default Target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make start      - Start the development server"
	@echo "  make build      - Build the app for production"
	@echo "  make test       - Run tests"
	@echo "  make eject      - Eject from create-react-app configuration"

# Start the development server
.PHONY: start
start:
	NODE_ENV=$(NODE_ENV) npm start

# Build the app for production
.PHONY: build
build:
	NODE_ENV=production npm run build

# Run tests
.PHONY: test
test:
	NODE_ENV=test npm run test

# Eject from CRA configuration
.PHONY: eject
eject:
	npm run eject

# Format
.PHONY: format
format:
	npm run format
