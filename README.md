# `@nrfcloud/aws-iam-authenticated-api-gateway-fetch`

<https://github.com/nRFCloud/aws-iam-authenticated-api-gateway-fetch/pkgs/npm/aws-iam-authenticated-api-gateway-fetch>

Helper function to use fetch against IAM authenticated APIs.

## Installation

The package is published to the
[GitHub Packages registry](https://github.com/nRFCloud/aws-iam-authenticated-api-gateway-fetch/pkgs/npm/aws-iam-authenticated-api-gateway-fetch).
Releases are also published to
[npm](https://www.npmjs.com/package/@nrfcloud/aws-iam-authenticated-api-gateway-fetch).

To install it, point the `@nrfcloud` scope to it in your project's `.npmrc` and
[authenticate](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages)
with a token that has the `read:packages` scope:

```
@nrfcloud:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm i (--save-prod|--save-dev) @nrfcloud/aws-iam-authenticated-api-gateway-fetch
```

## Usage

```typescript
import { iamAuthenticatedApiGatewayFetch } from "@bifravst/iam-authenticated-aws-api-gateway-fetch";
import { fromEnv } from '@aws-sdk/credential-providers'

const res = await iamAuthenticatedApiGatewayFetch(
  creds: fromEnv()
  region: 'us-east-1',
)('https://api.example.com/');
```

## Node & NPM

This project requires npm `>=12.0.2 <13` (enforced via `check-node-version` on
`npm install` and `npm ci`).

The check is skipped during `npm publish` and `npm pack`, because
`semantic-release` bundles its own npm (`@semantic-release/npm` depends on
`npm@^11.6.2`) and runs the publish with that version rather than the one
installed in CI.
