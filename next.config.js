/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        API_URL: 'https://test-task.shtrafovnet.com/fines'
    },
    async rewrites() {
        return [
            {
                source: '/fines/:path*',
                destination: '/api/:path*'
            }
        ];
    }
};
