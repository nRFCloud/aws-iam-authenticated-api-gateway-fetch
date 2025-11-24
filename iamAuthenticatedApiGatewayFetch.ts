import { Sha256 } from '@aws-crypto/sha256-js'
import { HttpRequest } from '@smithy/protocol-http'
import { SignatureV4 } from '@smithy/signature-v4'
import type {
	AwsCredentialIdentity,
	AwsCredentialIdentityProvider,
} from '@smithy/types'
import type { FetchImplementation } from './FetchImplementation.ts'

export const iamAuthenticatedApiGatewayFetch =
	(
		credentials: AwsCredentialIdentityProvider | AwsCredentialIdentity,
		region: string,
		fetchImplementation: FetchImplementation = fetch,
	): FetchImplementation =>
	async (url, options) => {
		const request = new HttpRequest({
			method: options?.method ?? 'GET',
			hostname: url.hostname,
			path: url.pathname,
			headers: {
				...(options?.headers ?? {}),
				host: url.hostname,
			},
			body: options?.body,
		})
		if (url.search) {
			request.query = Object.fromEntries(
				new URLSearchParams(url.search).entries(),
			)
		}

		const signer = new SignatureV4({
			credentials,
			region,
			service: 'execute-api',
			sha256: Sha256,
		})

		const signedRequest = await signer.sign(request)

		return fetchImplementation(url, {
			method: options?.method ?? 'GET',
			headers: signedRequest.headers,
			body: options?.body,
		})
	}
