import { process } from "$lib/markdown";
import fs from "fs";
import dayjs from "dayjs";

export function get({ params }) {
  const { mainCategory } = params;

  let mdList = fs
    .readdirSync(`src/posts/${mainCategory}`)
    .reduce((acc, subCategory) => {
      acc[subCategory] = fs.readdirSync(
        `src/posts/${mainCategory}/${subCategory}`
      );
      return acc;
    }, {});

  let posts = Object.keys(mdList).reduce((acc, subCategory) => {
    acc[subCategory] = mdList[subCategory]
      .filter((fileName) => /.+\.md$/.test(fileName))
      .map((fileName) => {
        const { metadata } = process(
          `src/posts/${mainCategory}/${subCategory}/${fileName}`
        );
        return {
          metadata,
          slug: fileName.slice(0, -3),
          mainCategory,
          subCategory,
        };
      });
    return acc;
  }, {});

  // sort the posts by create date.
  Object.keys(posts).forEach((subCategory) => {
    posts[subCategory].sort(
      (a, b) =>
        dayjs(b.metadata.date, "MMM D, YYYY") -
        dayjs(a.metadata.date, "MMM D, YYYY")
    );
  });

  let body = { posts };

  return {
    body,
  };
}
