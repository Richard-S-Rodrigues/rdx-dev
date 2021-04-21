export const formatSlug = (slug) => {
    return slug.replace(/\.(mdx|md)/, "");
};

export const formatDate = (date) => {
    const postDateTemplate: object = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const formatedDate = new Date(date).toLocaleDateString(
        "en-US",
        postDateTemplate
    );

    return formatedDate;
};
