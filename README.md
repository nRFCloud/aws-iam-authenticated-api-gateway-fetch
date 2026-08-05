# `@nrfcloud/aws-iam-authenticated-api-gateway-fetch`

<https://www.npmjs.com/package/@nrfcloud/aws-iam-authenticated-api-gateway-fetch>

Helper function to use fetch against IAM authenticated APIs.

## Install with NPM

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
