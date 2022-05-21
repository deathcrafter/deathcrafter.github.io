import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	min-height: 100%;
	width: 100%;
	padding: 1rem 0;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	width: 70%;
	max-width: 60rem;
	margin-bottom: 2rem;
`;

const Text = styled.p`
	font-family: "Rubik", sans-serif;
	font-size: 1.2rem;
	text-align: center;
	color: ${({ theme }) => theme.palette.primary[100]};
`;

const SectionTitle = styled(Text)`
	text-justify: center;
	font-size: 2.5rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.palette.accent.default};
`;

const CardGrid = styled.div`
	display: grid;
	grid-gap: 0.7rem;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
	@media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const CardBody = styled.div`
	grid-column: span 2;
	display: flex;
	gap: 0.7rem;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.palette.primary[900]};
	box-shadow: 0 0 3px ${({ theme }) => theme.palette.accent.brighter};

	&:hover {
		box-shadow: 0 0 5px ${({ theme }) => theme.palette.accent.brighter};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		&:last-child:nth-child(2n + 1) {
			grid-column-end: 4;
		}
	}
`;

const CardIcon = styled.img`
	width: 2rem;
`;

const CardText = styled(Text)`
	text-align: left;
`;

const Card = function (props) {
	const { before, icon, text } = props;
	return (
		<CardBody>
			{before}
			{icon ? <CardIcon src={icon} /> : <></>}
			<CardText>{text}</CardText>
		</CardBody>
	);
};

const ProfilePicture = styled.img`
	height: 10rem;
	min-width: 10rem;
	margin-top: 3rem;
	border-radius: 2rem;
	aspect-ratio: 1280/626;
	box-shadow: 0 0 5px ${({ theme }) => theme.palette.accent.brighter};
`;

export { Container, Section, Text, SectionTitle, CardGrid, Card, ProfilePicture };
