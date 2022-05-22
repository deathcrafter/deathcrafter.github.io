import styled from "styled-components";
import { Link } from "react-router-dom";

const PostCard = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 0.55rem;
	width: 100%;
	max-width: 60rem;
	margin: 1rem 0;
	padding: 1.5rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.palette.primary[900]};
	box-shadow: 0 0 3px ${({ theme }) => theme.palette.accent.brighter};
	text-decoration: none;
	&:hover {
		box-shadow: 0 0 5px ${({ theme }) => theme.palette.accent.brighter};
	}
`;

const Text = styled.p`
	font-family: "Rubik", sans-serif;
	vertical-align: center;
`;

const PostDate = styled(Text)`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.palette.primary[400]};
`;

const PostTitle = styled(Text)`
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.palette.primary[100]};
`;

const PostDescription = styled(Text)`
	font-size: 1rem;
	font-weight: 400;
	text-align: justify;
	color: ${({ theme }) => theme.palette.primary[200]};
`;

export { PostCard, PostDate, PostDescription, PostTitle };
