export function isPublicIP(ip: string): boolean {
  const parts = ip.split(".").map(Number)
  if (parts.length !== 4 || parts.some((part) => isNaN(part) || part < 0 || part > 255)) {
    return false
  }
  return (
    parts[0] === 10 ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168) ||
    parts[0] === 127
  )
}

export function extractFirstValidIP(text: string): string | null {
  const ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g
  const matches = text.match(ipPattern)
  if (!matches) {
    return null
  }
  for (const ip of matches) {
    if (ip) {
      return ip
    }
  }
  return null
}
