import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ className, children }) => {
    const language = className.replace("language-", "");
    return (
        <SyntaxHighlighter style={coldarkDark} language={language}>
            {children}
        </SyntaxHighlighter>
    );
};

export default Code;
