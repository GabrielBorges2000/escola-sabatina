export function getUrl(path?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || ''
  console.log(baseUrl)

  const normalizedPathname =
    path && !path.startsWith('/') ? `/${path}` : path || ''

  const URL = `${baseUrl}${normalizedPathname}`

  return URL
}
