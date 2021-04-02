const PostBody = ({ body_markdown }) => {
    return (
        <section
            dangerouslySetInnerHTML={{
                __html: body_markdown.renderedOutput,
            }}
        />
    );
};

export default PostBody;
