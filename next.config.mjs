/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.oh-lolly-day.com' },
      { protocol: 'http', hostname: 'www.oh-lolly-day.com' },
    ],
  },
}

export default nextConfig
