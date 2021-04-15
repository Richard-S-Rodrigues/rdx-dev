import { ReactNode } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeProps {
    className: string;
    children: ReactNode;
}

const Code = ({ className, children }: CodeProps) => {
    const language = className.replace("language-", "");
    return (
        <SyntaxHighlighter style={coldarkDark} language={language}>
            {children}
        </SyntaxHighlighter>
    );
};

export default Code;
