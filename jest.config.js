export default {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  moduleNameMapper: {
    "^.+\\.css$": "<rootDir>/src/test/fileStub.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
