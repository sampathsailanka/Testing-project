module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    "^@vue/test-utils":
      "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
  },
};
