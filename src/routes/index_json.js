import { process } from "$lib/markdown";
import fs from "fs";
import dayjs from "dayjs";

export function get() {
  let posts = fs.readdirSync(`src/posts`).reduce((allPosts, mainCategory) => {
    let mdDirList = fs
      .readdirSync(`src/posts/${mainCategory}`)
      .reduce((allMainCategories, subCategory) => {
        let mdFiles = fs
          .readdirSync(`src/posts/${mainCategory}/${subCategory}`)
          .filter((fileName) => /.+\.md$/.test(fileName))
          .map((fileName) => {
            const { metadata } = process(
              `src/posts/${mainCategory}/${subCategory}/${fileName}`
            );

            return {
              metadata,
              mainCategory,
              subCategory,
              slug: fileName.slice(0, -3),
            };
          });

        return [...allMainCategories, ...mdFiles];
      }, []);

    return [...allPosts, ...mdDirList];
  }, []);

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
