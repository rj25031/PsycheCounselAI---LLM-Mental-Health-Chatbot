import crypto from "crypto";
// Generate a secure random key with 256 bits (32 bytes)
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);