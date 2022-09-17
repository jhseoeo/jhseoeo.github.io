import { process } from "$lib/markdown";
import fs from "fs";
import dayjs from "dayjs";

export function get() {
  let mdList = fs.readdirSync(`src/posts`).reduce((allPosts, mainCategory) => {
    let mdDirList = fs
      .readdirSync(`src/posts/${mainCategory}`)
      .reduce((postsInMainCategories, subCategory) => {
        let mdFiles = fs
          .readdirSync(`src/posts/${mainCategory}/${subCategory}`)
          .map((fileName) => {
            return {
              mainCategory,
              subCategory,
              fileName,
            };
          });

        return [...postsInMainCategories, ...mdFiles];
      });

    return [...allPosts, ...mdDirList];
  });

  let posts = mdList
    .filter((v) => /.+\.md$/.test(v.fileName))
    .map((v) => {
      const { metadata } = process(
        `src/posts/${v.mainCategory}/${v.subCategory}/${v.fileName}`
      );
      return {
        metadata,
        slug: v.fileName.slice(0, -3),
        mainCategory: v.mainCategory,
        subCategory: v.subCategory,
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
