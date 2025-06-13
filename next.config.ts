import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/gthb',
        destination: 'https://github.com/VirakbothSoth',
        permanent: true,
      },
      {
        source: '/fb',
        destination: 'https://facebook.com/VirakbothSothSam',
        permanent: true,
      },
      {
        source: '/t',
        destination: 'https://t.me/VirakbothSoth',
        permanent: true,
      },
      {
        source: '/lnkdin',
        destination: 'https://linkedin.com/in/virakboth-soth',
        permanent: true,
      },
      {
        source: '/cdly',
        destination: 'https://www.credly.com/users/virakboth-soth',
        permanent: true,
      },
      {
        source: '/ltcd',
        destination: 'https://leetcode.com/u/VirakbothSoth',
        permanent: true,
      },
      {
        source: '/hrnk',
        destination: 'https://hackerrank.com/profile/virakbothsoth',
        permanent: true,
      },
      {
        source: '/cdwr',
        destination: 'https://codewars.com/users/VirakbothSoth',
        permanent: true,
      },
      {
        source: '/fcc',
        destination: 'https://freecodecamp.org/virakboth_soth',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
