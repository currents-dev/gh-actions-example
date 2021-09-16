# Currents.dev - GitHub Actions Example

This is an example repository that showcases using [Cypress GitHub Actions](https://github.com/cypress-io/github-action) with [Currents.dev](https://currents.dev).

The example [workflow config file](https://github.com/currents-dev/gh-actions-example/blob/main/.github/workflows/currents.yml):

- runs 3 containers with cypress tests in parallel

- installs `@currents/cli` npm package as a separate step

- uses [Custom Test Command](https://github.com/cypress-io/github-action#custom-test-command) to run `currents` for recording test results and parallelization with [Currents.dev](https://currents.dev)

- Note: use CLI arguments to customize your cypress runs, e.g.: `currents run --parallel --record --key <your currents.dev key> --group groupA`

- Note: create an organization, get your record key on [Currents.dev](https://app.currents.dev) and set your [GH secret](https://docs.github.com/en/actions/reference/encrypted-secrets)
