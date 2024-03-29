export function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
