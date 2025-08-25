/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com"], // 👈 allow this external image domain
    },
    experimental: {
        reactCompiler: false,
    }
};

export default nextConfig;