import { process } from "$lib/markdown";
import fs from "fs";
import dayjs from "dayjs";

export function get({ params }) {
  const { mainCategory, subCategory } = params;

  let mdList = fs
    .readdirSync(`src/posts/${mainCategory}/${subCategory}`)
    .map((v) => {
      return {
        mainCategory,
        subCategory,
        fileName: v,
      };
    });

  let posts = mdList
    .filter((v) => /.+\.md$/.test(v.fileName))
    .map((v) => {
      const { metadata } = process(
        `src/posts/${mainCategory}/${subCategory}/${v.fileName}`
      );
      return {
        metadata,
        slug: v.fileName.slice(0, -3),
        mainCategory,
        subCategory,
      };
    });
  // sort the posts by create date.
  posts.sort(
    (a, b) =>
      dayjs(b.metadata.date, "MMM D, YYYY") -
      dayjs(a.metadata.date, "MMM D, YYYY")
  );
  let body = { posts };

  return {
    body,
  };
}
