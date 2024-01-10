/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media-cdn.tripadvisor.com','links.papareact.com'],
  },
  env: {
    MAPBOX_KEY:"pk.eyJ1IjoiY3JhZnRpbmdidWdzIiwiYSI6ImNscjdocHNoMzBkcjYyaW54aGlhaWc3a2oifQ.yLpngP-KJhtMEamAuCY0Eg"
  }
}

module.exports = nextConfig
