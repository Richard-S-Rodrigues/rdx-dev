import { ReactNode } from "react";

interface PostBodyProps {
    children: ReactNode;
}

const PostBody = ({ children }: PostBodyProps) => {
    return <section>{children}</section>;
};

export default PostBody;
