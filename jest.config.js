// const path = require('path')
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // preset: 'jest',
  testEnvironment: path.join(__dirname, 'prisma', 'test-env.js'),
  // setupFilesAfterEnv: jest.setTimeout(10000)
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // "^.+\\.[t|j]sx?$": "babel-jest"
  },
//   moduleNameMapper: {
//     'uuid': '<rootDir>/node_modules/uuid/dist/esm-browser/index.js',
// },
"transformIgnorePatterns": [
  "node_modules/?!(uuid)"
]

}