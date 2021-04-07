import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ children }) => {
    return (
        <SyntaxHighlighter style={docco} language="javascript">
            {children}
        </SyntaxHighlighter>
    );
};

export default Code;
