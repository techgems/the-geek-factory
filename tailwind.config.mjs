/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: 'var(--color-zinc-200)',
						a: {
							color: 'var(--color-red-700)',
							'&:hover': {
								color: 'var(--color-red-600)',
							},
						},
					},
				},
			},
		},
	},
}

