async function sha256Hex(message) {
  const bytes = new TextEncoder().encode(message);          // UTF-8 bytes
  const hash = await crypto.subtle.digest("SHA-256", bytes); // ArrayBuffer, 32 bytes
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
}

