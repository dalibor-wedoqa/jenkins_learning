const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},

		reporter: "cypress-testrail-reporter", // Set the reporter to Cypress TestRail Reporter
		reporterOptions: {
			domain: process.env.TESTRAIL_DOMAIN || "alasdoo.testrail.io", // TestRail domain
			username: process.env.TESTRAIL_USERNAME || "tester@wedoqa.com", // TestRail username or API key
			password: process.env.TESTRAIL_PASSWORD || "2S:xW8UgfHp!-8T", // TestRail password or API key
			projectId: process.env.TESTRAIL_PROJECT_ID || 3, // TestRail project ID
			suiteId: process.env.TESTRAIL_SUITE_ID || 1, // TestRail suite ID
			runName: "Automated Test Run - Jenkins", // Name for the test run
		},

		// Optional: You can set base URL, default timeout, etc.
		baseUrl: "https://www.goggle.com",
		defaultCommandTimeout: 10000, // Example of increasing the default command timeout to 10s
		retries: {
			runMode: 1, // Retry failed tests 1 time when running in CLI
			openMode: 0, // No retries in interactive mode
		},
	},
});
