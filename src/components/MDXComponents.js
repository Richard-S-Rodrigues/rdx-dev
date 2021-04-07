import Image from "next/image";

import Code from "./mdx/Code.js";

const MDXComponents = {
    paragraph: (paragraph) => {
        const { node } = paragraph;
        if (node.children[0].type === "image") {
            const image = node.children[0];
            return (
                <Image src={image.url} alt={image.alt} layout="responsive" />
            );
        }

        return <p>{paragraph.children}</p>;
    },
    code: Code,
};

export default MDXComponents;
