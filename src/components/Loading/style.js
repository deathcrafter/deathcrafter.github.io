import styled from "styled-components";

const LoadingSection = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	/* gap: 1rem; */
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

const LoadingText = styled.div`
	font-family: "Rubik", sans-serif;
	vertical-align: center;
	font-size: 1.2rem;
	font-weight: 500;
	color: ${({ theme }) => theme.palette.primary[400]};
`;

export { LoadingSection, LoadingText };
