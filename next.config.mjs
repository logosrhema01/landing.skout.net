/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: { unoptimized: true },
	output: "export",
	distDir: "docs",
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [
								{
									name: "removeViewBox",
									active: false,
								},
							],
						},
					},
				},
			],
		});
		return config;
	},
};

export default nextConfig;
