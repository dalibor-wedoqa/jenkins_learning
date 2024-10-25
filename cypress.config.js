const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		// Test and spec pattern configuration
		specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
		// Fixtures path for test data
		fixturesFolder: "cypress/fixtures",
		// Video, screenshots, and test results folder paths
		videosFolder: "cypress/videos",
		screenshotsFolder: "cypress/screenshots",
		reporterOutputDir: "results", // Path to store report files
		baseUrl: "https://www.google.com", // Set the base URL for the app
		defaultCommandTimeout: 10000, // Adjust timeout based on app responsiveness
		retries: {
			runMode: 1, // Retry failed tests twice in CI mode (Jenkins)
			openMode: 0, // No retries when running locally in open mode
		},
		setupNodeEvents(on, config) {
			// Add additional event listeners or plugins here
		},
		env: {
			testrailReporterEnabled: true, // Enable/disable TestRail reporting via environment variable
		},
		reporter: "cypress-multi-reporters", // Use multiple reporters
		reporterOptions: {
			reporterEnabled: "spec, junit, cypress-testrail-reporter", // Enable both 'spec' and 'junit' reporters
			junitReporterOptions: {
				mochaFile: "results/test-results.[hash].xml", // JUnit XML report path for Jenkins
				toConsole: true, // Output test results to the console as well
			},
			testrailReporterOptions: {
				domain: "alasdoo.testrail.io", // TestRail domain
				username: "tester@wedoqa.com", // TestRail username (email)
				password: "2S:xW8UgfHp!-8T", // TestRail API key
				projectId: 3, // TestRail project ID
				suiteId: 1, // TestRail suite ID
				runName: "Automated test run from Jenkins", // Name for the TestRail test run
			},
		},
		screenshotOnRunFailure: true, // Capture screenshots on failures
	},
});
