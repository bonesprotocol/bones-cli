import { createScript } from "./keepsake";

export function getClaimScript() {
  const keepsake = { claiming: true };

  return createScript(keepsake);
}

export function encodeClaimProtocolMessage(): Uint8Array {
  const payload: number[][] = [];

  // Claim has no body to encode yet
  return new Uint8Array(payload.flat());
}

export default {
  getClaimScript,
  encodeClaimProtocolMessage,
};
