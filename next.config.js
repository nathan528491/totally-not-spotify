/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    future: { webpack5: true }
}
