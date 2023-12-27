const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    settings
  }}
