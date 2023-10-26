import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import babel from "vite-plugin-babel-compiler";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			babel: {
			  plugins: [
				["@babel/plugin-proposal-decorators", { legacy: true }],
				["@babel/plugin-proposal-class-properties"],
			  ],
			},
		  }),
	],
});
