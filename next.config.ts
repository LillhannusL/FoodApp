import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.spoonacular.com',
				port: '',
				pathname: '/recipes/**',
			},
		],
	},
};

export default nextConfig;
