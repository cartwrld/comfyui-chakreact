/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3004',
                pathname: '/images/*',
            },
        ],
    },

}

module.exports = nextConfig
