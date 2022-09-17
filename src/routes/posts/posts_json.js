import { process } from "$lib/markdown";
import fs from "fs";
import dayjs from "dayjs";

export function get() {
    let posts = fs
        .readdirSync(`src/posts`)
        .reduce((allMainCategories, mainCategory) => {
            allMainCategories[mainCategory] = fs
                .readdirSync(`src/posts/${mainCategory}`)
                .reduce((allSubCategories, subCategory) => {
                    allSubCategories[subCategory] = fs
                        .readdirSync(`src/posts/${mainCategory}/${subCategory}`)
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
                    return allSubCategories;
                }, {});
            return allMainCategories;
        }, {});

    // sort the posts by create date.
    Object.keys(posts).forEach((mainCategory) => {
        Object.keys(posts[mainCategory]).forEach((subCategory) => {
            posts[mainCategory][subCategory].sort(
                (a, b) =>
                    dayjs(b.metadata.date, "MMM D, YYYY") -
                    dayjs(a.metadata.date, "MMM D, YYYY")
            );
        });
    });

    let body = { posts };
    console.log(body);

    return {
        body,
    };
}
