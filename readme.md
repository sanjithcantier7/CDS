# Cantier Design System (CDS) - Developer Guide

## Prerequisites
Ensure you have the following versions installed before starting development:

- **Node.js**: 22.11.0
- **NPM**: 11.0.0

## ⚠️ Strict Guidelines for Version Control ⚠️
### Do NOT push or update the `package.json` file.
This file should remain unchanged in the repository to maintain consistency across environments.

## Installation
To install the Cantier Design System library package in your React project, follow these steps:

Since this is a private repository and only contributors can access it, include the GitHub repository link in the `package.json` file under the dependencies section. Ensure you specify the exact version you want to use.

### Example `package.json` Dependencies:
```json
{
  "dependencies": {
    "@fluentui/react-components": "^9.60.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## ❌ Do Not Alter Any Of The Packages ❌
Ensure that the dependencies remain as specified to maintain stability and compatibility.

