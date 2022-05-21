import styled from "styled-components";
import ReactMarkdown from "react-markdown";

// export const PostSection = styled.div``

export const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 90%;
	min-height: calc(100% - 6rem);
	max-width: 60rem;
	padding: 5% 0;
	margin-bottom: 6rem;
`;

const PostText = styled.p`
	font-family: "Rubik", sans-serif;
	/* text-align: center; */
	vertical-align: center;
`;

export const PostDate = styled(PostText)`
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.palette.primary[400]};
`;

export const PostTitle = styled(PostText)`
	font-size: 2.5rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.palette.primary[100]};
`;

export const Markdown = styled(ReactMarkdown)`
	* {
		overflow-wrap: break-word;
		letter-spacing: 0.025rem;
		font-weight: 400;
	}
	color: ${({ theme }) => theme.palette.text.default};
	& p {
		font-size: 1.2rem;
		/* text-align: justify; */
		:nth-child(n) {
			padding-bottom: 1rem;
		}
	}
	& ul {
		list-style: square;
		margin-top: 10px;
		font-size: 1rem;
	}
	& li {
		padding-bottom: 2px;
	}
	// Prevent going outside the container
	& img {
		max-width: 100%;
		margin-top: 1rem;
	}
	& a {
		color: ${({ theme }) => theme.palette.secondary.default};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	& h1,
	h2,
	h3,
	h4,
	h5 {
		margin-top: 1.5rem;
	}

	.md-code {
		border-radius: 6px !important;
		font-family: inherit !important;
		font-size: 1rem !important;
		line-height: 1.5 !important;
		tab-size: 4 !important;
		hyphens: none !important;
		padding: 1em !important;
		margin: 0.5em 0px !important;
		background-color: ${({ theme }) => theme.palette.primary[700]} !important;
		code {
			background-color: transparent !important;
			color: ${({ theme }) => theme.palette.primary[100]} !important;
		}
		& .linenumber {
			color: ${({ theme }) => theme.palette.primary[400]} !important;
		}
	}
`;

export const InlineCodeBlock = styled.span`
	display: inline-block;
	max-width: 100%;
	overflow-wrap: anywhere;
	border-radius: 0.3rem;
	padding: 0.125rem 0.2rem;
	font-family: "Cascadia Code";
	font-size: 1rem;
	font-weight: 300;
	background-color: ${({ theme }) => theme.palette.primary[700]};
	color: ${({ theme }) => theme.palette.primary[100]};
`;
