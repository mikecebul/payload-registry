# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a custom shadcn/ui component registry template built with Next.js 15 and Tailwind CSS v4. It allows distributing custom components, hooks, pages, and other files to any React project via the `shadcn` CLI.

## Key Architecture

- **Registry Definition**: `registry.json` defines all registry items with metadata, dependencies, and file paths
- **Component Storage**: Registry components are stored in `registry/new-york/` following shadcn structure
- **Build Output**: `shadcn build` generates static JSON files in `public/r/` for CLI consumption
- **Component Types**: Supports components, blocks, pages, hooks, lib utilities, and CSS files
- **Dependencies**: Uses `registryDependencies` for internal components and `dependencies` for npm packages

## Development Commands

```bash
# Development server with Turbopack
pnpm dev

# Build the project
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Build registry (generates public/r/*.json files)
pnpm registry:build
```

## Registry Structure

- Registry items are defined in `registry.json` with schema validation
- Components follow the "new-york" style variant
- File types: `registry:component`, `registry:page`, `registry:hook`, `registry:lib`
- Built registry files are served from `public/r/` as static JSON

## Key Configuration

- **Shadcn Config**: `components.json` configures aliases and Tailwind settings
- **Style**: Uses "new-york" variant with RSC enabled
- **Tailwind**: v4 with CSS variables and neutral base color
- **Aliases**: `@/components`, `@/lib/utils`, `@/components/ui`, etc.

## Component Dependencies

Use `registryDependencies` in `registry.json` to reference other registry components (e.g., "button", "card"). Use `dependencies` for npm packages (e.g., "zod").