import { process } from "$lib/markdown";

export function get({ params }) {
  const { slug, mainCategory, subCategory } = params;

  const { metadata, content } = process(
    `src/posts/${mainCategory}/${subCategory}/${slug}.md`
  );
  const body = JSON.stringify({ metadata, content, mainCategory, subCategory });

  return {
    body,
  };
}
