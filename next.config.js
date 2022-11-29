/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    loader: 'cloudinary',
<<<<<<< HEAD
    path: '/',
  },
};
=======
    path: '/'
  }
}
>>>>>>> 6249881abb323b6213cab16b8d6e57a1608d0959


module.exports = nextConfig
