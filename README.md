# Currents.dev - GitHub Actions Example

This is an example repository that showcases using [Currents.dev](https://currents.dev) for running cypress tests on GitHub Actions.

The example [workflow config file](https://github.com/currents-dev/gh-actions-example/blob/main/.github/workflows/currents.yml):

- runs 3 containers with cypress tests in parallel

- uses [Custom Test Command](https://github.com/cypress-io/github-action#custom-test-command) to run `cypress-cloud` for recording test results and parallelization with [Currents.dev](https://currents.dev)

- Note: get your record key from [Currents.dev](https://app.currents.dev) and set [GH secret](https://docs.github.com/en/actions/reference/encrypted-secrets) variable `CURRENTS_RECORD_KEY`

- Note: set the `projectId` in `currents.config.js` (you can obtain the project id from [Currents.dev](https://app.currents.dev)

- Note: use CLI arguments to customize your cypress-cloud runs, e.g.: `npx cypress-cloud run --parallel --record --key <your currents.dev key> --group groupA`

Here's an example of how the demo workflow appears in Currents dashboard:

![Kapture 2021-09-16 at 12 14 16](https://user-images.githubusercontent.com/1637928/133671707-cd809410-863e-4118-9204-60410e17b0bd.gif)
