# Contributing

Thank you for contributing to
`@nrfcloud/aws-iam-authenticated-api-gateway-fetch`! This is a published library
distributed via
[JSR](https://jsr.io/@nrfcloud/aws-iam-authenticated-api-gateway-fetch).

## Development setup

1. Ensure you
   [have access to the NPM repositories](https://nordicsemi.atlassian.net/wiki/spaces/MFLT/pages/1727136233/Nordic+Engineering+Tools+Setup+go+eng-tools#NPM)
   and
   [GitHub push access](https://nordicsemi.atlassian.net/wiki/spaces/MFLT/pages/1727136233/Nordic+Engineering+Tools+Setup+go+eng-tools#nRFCloud-Organization).
1. Get your environment set up by running `npm ci`
1. Make your changes locally in a git clone of the repo in your own branch.
1. As you go, commit along the way so that you get type checking, etc. to run.

> [!NOTE]  
> The package ships TypeScript sources directly (`package.json`'s `main` and
> `jsr.json`'s `exports` point at the `.ts` files), so there is no build step.

## Testing

This library has no unit-test suite. Correctness is enforced through type
checking and formatting:

1. Run `npx tsc --noEmit` to type-check the sources against
   [`tsconfig.json`](tsconfig.json).
1. Run `npx prettier --check .` to verify formatting (the project uses
   [`@bifravst/prettier-config`](https://www.npmjs.com/package/@bifravst/prettier-config)).
   Use `npx prettier --write .` to apply it.

## Squash your commits

1. Finally, create a commit that packages up all the changes.
1. Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
   (e.g. `fix:`, `feat:`, etc.) to prefix the title.
1. Reference any applicable Jira tickets (e.g. `NPE-123`) in the commit message.
1. Push your branch and create a pull request.
1. Get the code reviewed.
1. Once approved and CI passes, rebase or squash away!

## Releasing a new version

1. [`semantic-release` in the Test&Release workflow](.github/workflows/test-and-release.yaml)
   takes care of publishing a new version of the package to
   [JSR](https://jsr.io/@nrfcloud/aws-iam-authenticated-api-gateway-fetch) on
   merge to `main`. The version number is derived from your
   [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

> [!NOTE]  
> Never run `semantic-release` or publish by hand — publishing happens
> automatically on merge to the default branch via the workflow.

Once a new version is published, consumers can bump the dependency and pick up
your changes:

```bash
npx jsr add (--save-prod|--save-dev) @nrfcloud/aws-iam-authenticated-api-gateway-fetch
```
