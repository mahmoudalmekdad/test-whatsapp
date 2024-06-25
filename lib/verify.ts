import crypto from 'crypto';
export function verifyWebhook(message: string, signature: string): boolean {
    const prefix = 'sha256=';
    if (!signature.startsWith(prefix)) {
        return false;
    }
    const sigWithoutPrefix = signature.slice(prefix.length);
    const hmac = crypto.createHmac('sha256', "dc0d737eb9b8a24393d4d7146f7ec765");
    const messageHash = hmac.update(message).digest("hex");
    return sigWithoutPrefix === messageHash;

}