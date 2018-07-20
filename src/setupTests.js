import elementDatasetPolyfill from "element-dataset";

elementDatasetPolyfill();

// Mock fetch
global.fetch = require("jest-fetch-mock");

// Hide console.error messages
global.console.error = jest.fn();
