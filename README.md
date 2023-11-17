# Currents.dev - GitHub Actions Example

This is an example repository that showcases using [Currents.dev](https://currents.dev) for running cypress tests on GitHub Actions.

The example [workflow config file](https://github.com/currents-dev/gh-actions-example/blob/main/.github/workflows/currents.yml):

- runs 3 containers with cypress tests in parallel

- install [block-free Cypress binaries](https://currents.dev/readme/integration-with-cypress/alternative-cypress-binaries)

- uses [Custom Test Command](https://github.com/cypress-io/github-action#custom-test-command) to run `cypress-cloud` for recording test results and parallelization with [Currents.dev](https://currents.dev)

- Note: get your record key from [Currents.dev](https://app.currents.dev) and set [GH secret](https://docs.github.com/en/actions/reference/encrypted-secrets) variable `CURRENTS_RECORD_KEY`

- Note: set the `projectId` in `currents.config.js` - obtain the project id from [Currents.dev](https://app.currents.dev)

- Note: use CLI arguments to customize your cypress-cloud runs, e.g.: `npx cypress-cloud run --parallel --record --key <your currents.dev key> --group groupA`

Here's an example of how the demo workflow appears in Currents dashboard:

https://user-images.githubusercontent.com/1637928/227701237-db4d7a7f-b26b-46ac-ba6a-3806ede37671.mp4

## Using Alternative Cypress Binaries

Following [aggressive blocking](https://github.com/cypress-io/cypress/issues/28269) by Cypress.io team we released alternative, block-free Cypress binaries that were compiled from the MIT-licensed Cypress source code.

The documentation is available at: https://currents.dev/readme/integration-with-cypress/alternative-cypress-binaries.

The example in this repository uses [cypress-io/github-action@v6](https://github.com/cypress-io/github-action). `cypress-io/github-action` **caches and restores cypress binaries before running the tests** - you need to disable this behaviour to use the freshly installed non-blocking binaries:

```yml
- name: Run Cypress on Currents.dev
  env:
    # enable verbose logging
    DEBUG: \@cypress/github-action
  uses: cypress-io/github-action@v6
  continue-on-error: true

  with:
    # 🔥 Set to false to prevent restoring cached blocking Cypress binary
    install: false
    command: |
      npx cypress-cloud --record --parallel --browser chrome --key ${{ secrets.CURRENTS_RECORD_KEY }} --ci-build-id "${{ github.repository }}-${{ github.run_id }}-${{ github.run_attempt}}"
```
