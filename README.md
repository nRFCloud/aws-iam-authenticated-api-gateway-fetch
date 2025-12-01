# `@nrfcloud/aws-iam-authenticated-api-gateway-fetch`

<https://jsr.io/@nrfcloud/aws-iam-authenticated-api-gateway-fetch>

Helper function to use fetch against IAM authenticated APIs.

## Install with NPM

```bash
npx jsr add (--save-prod|--save-dev) @nrfcloud/aws-iam-authenticated-api-gateway-fetch
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
