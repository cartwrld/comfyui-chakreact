/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgur.com',
                port: '',
                pathname: '/CtkIAQO.png',
            },
        ],
    },
}

module.exports = nextConfig
