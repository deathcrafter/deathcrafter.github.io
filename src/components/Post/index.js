import { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedPostId, selectedPost } from "../../state";
import useThemeDetector from "../../lib/useThemeDetector";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PostContainer, PostTitle, PostDate, Markdown, InlineCodeBlock } from "./style";
import CircularProgress from "@mui/material/CircularProgress";

import * as dayjs from "dayjs";

function PostContent(props) {
	const isDarkTheme = useThemeDetector();
	const retrievedPost = useRecoilValue(selectedPost);
	return (
		<>
			<PostTitle>{retrievedPost.title}</PostTitle>
			<PostDate>
				{retrievedPost.author} • {dayjs(retrievedPost.date).format("MMMM DD, YYYY")}
			</PostDate>
			<Markdown
				remarkPlugins={[gfm]}
				rehypePlugins={[rehypeRaw]}
				components={{
					code: (props) => {
						const lang = /language-(\w+)/.exec(props.className || "");
						return !props.inline ? (
							<SyntaxHighlighter
								language={(lang && lang[1]) || undefined}
								style={isDarkTheme ? materialDark : materialLight}
								children={String(props.children).replace(/\n$/, "")}
								showLineNumbers={true}
								PreTag="div"
								className="md-code"
							/>
						) : (
							<InlineCodeBlock
								className={props.className}
								{...props}
								children={String(props.children).replace(/\n+$/, "")}
							/>
						);
					},
				}}
			>
				{retrievedPost.body}
			</Markdown>
		</>
	);
}

export default function Post(props) {
	const params = useParams();
	const [selectedId, setSelectedId] = useRecoilState(selectedPostId);
	useEffect(() => {
		if (selectedId !== params.id) setSelectedId(params.id);
	});
	return (
		<PostContainer>
			<Suspense fallback={<CircularProgress />}>
				<PostContent />
			</Suspense>
		</PostContainer>
	);
}
