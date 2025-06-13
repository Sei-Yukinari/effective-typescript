# My Node.js Project

A modern Node.js project with TypeScript, Jest, ESM, ESLint, Prettier, and Docker support.

## Features

- **TypeScript**: Static type checking
- **ESM (ES Modules)**: Modern module system
- **Jest**: Testing framework with coverage
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **EditorConfig**: Consistent coding styles
- **Docker**: Containerization with multi-stage builds
- **Docker Compose**: Development and production environments

## Prerequisites

- Node.js 22 or higher
- npm or yarn
- Docker and Docker Compose (optional)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-node-project

# Install dependencies
npm install
```

## Development

```bash
# Start development server with hot reload
npm run dev

# Build the project
npm run build

# Start production server
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Docker

### Development

```bash
make up
```

## Project Structure

```
├── src/
│   ├── utils/
│   │   ├── greet.ts
│   │   └── greet.test.ts
│   ├── server.ts
│   └── index.ts
├── dist/                 # Build output
├── coverage/            # Test coverage reports
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile          # Production Docker image
├── Dockerfile.dev      # Development Docker image
├── jest.config.js      # Jest configuration
├── tsconfig.json       # TypeScript configuration
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── .editorconfig       # EditorConfig
├── .gitignore
├── .dockerignore
└── package.json
```

## API Endpoints

- `GET /` - Hello World message
- `GET /health` - Health check endpoint

## Scripts

- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Remove build directory

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## License

MIT
