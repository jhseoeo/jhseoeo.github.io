import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
				prependData: `@use 'src/lib/assets/scss/vars';`
			}
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html'
		}),
		prerender: {
			entries: [
				'*',
				'/api/posts/page/*',
				'/category/*/page/',
				'/category/*/page/*',
				'/category/page/',
				'/category/page/*',
				'/posts/page/',
				'/posts/page/*'
			],
			handleHttpError: ({ status, path }) => {
				// Ignore 404s for missing blog posts during prerender
				if (status === 404) {
					console.warn(`Ignoring 404 for ${path}`);
					return;
				}
				throw new Error(`${status} ${path}`);
			}
		}
	}
};

export default config;
