import {
    Chip,
    Container,
    Divider,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

interface Props {
    path: string;
}

function MarkdownLink(props: any) {
    return (
        <Link href={props.href} target="_blank" underline="hover">
            {props.children}
        </Link>
    );
}

function MarkdownTable(props: { children: ReactNode }) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                {props.children}
            </Table>
        </TableContainer>
    );
}

function MarkdownTableCell(props: { children: ReactNode }) {
    return (
        <TableCell>
            {props.children}
            {/* <Typography>{props.children}</Typography> */}
        </TableCell>
    );
}

function MarkdownCode(props: { children: ReactNode }) {
    return <Chip size="small" label={props.children?.toString()} />;
}

function MarkdownH1(props: { children: ReactNode }) {
    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: "2em",
                    display: "block",
                    marginBlockStart: "0.67em",
                    marginBlockEnd: "0.3em",
                    fontWeight: "bold",
                    lineHeight: 1.25,
                }}
            >
                {props.children}
            </Typography>
            <Divider />
        </>
    );
}

function MarkdownH2(props: { children: ReactNode }) {
    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    fontSize: "1.5em",
                    display: "block",
                    marginBlockStart: "0.83em",
                    marginBlockEnd: "0.3em",
                    fontWeight: "bold",
                    lineHeight: 1.25,
                }}
            >
                {props.children}
            </Typography>
            <Divider />
        </>
    );
}

export default function MDContainer({ path }: Props) {
    const [content, setContent] = useState("");
    const { pathname } = useLocation();
    useEffect(() => {
        fetch(path)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [path]);

    return (
        <Container>
            <ReactMarkdown
                children={content}
                components={{
                    code: MarkdownCode,
                    a: MarkdownLink,
                    // p: MarkdownParagraph,
                    table: MarkdownTable,
                    thead: TableHead,
                    tbody: TableBody,
                    th: MarkdownTableCell,
                    tr: TableRow,
                    td: MarkdownTableCell,
                    tfoot: TableFooter,
                    h1: MarkdownH1,
                    h2: MarkdownH2,
                    // br: MarkdownBr,
                }}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
            />
        </Container>
    );
}
