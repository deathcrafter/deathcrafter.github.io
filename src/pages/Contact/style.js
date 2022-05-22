import styled from "styled-components";

const FormSection = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	width: 70%;
	max-width: 60rem;
	margin-bottom: 2rem;
`;

const Text = `
	font-family: "Rubik", sans-serif;
	font-size: 1.2rem;
`;

const SectionTitle = styled.p`
	${Text}
	text-justify: center;
	font-size: 2.5rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.palette.accent.default};
`;

const TextCommon = `
	&.invalid {
		box-shadow: 0 0 3px rgb(224, 62, 49);
	}
	&.valid {
		box-shadow: 0 0 3px rgb(50, 218, 96);
	}
	&:focus {
		outline: none;
	}
`;

const TextBox = styled.input`
	display: block;
	width: 90%;
	max-width: 40rem;
	padding: 0.5rem;
	border-width: 0;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.palette.primary[900]};
	color: ${({ theme }) => theme.palette.primary[100]};

	${Text}
	${TextCommon}

	&.form-init {
		box-shadow: 0 0 3px ${({ theme }) => theme.palette.accent.brighter};
	}
`;

const TextField = styled.textarea`
	width: 90%;
	max-width: 40rem;
	min-height: 6rem;
	resize: none;
	padding: 0.5rem;
	border-width: 0;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.palette.primary[900]};
	color: ${({ theme }) => theme.palette.primary[100]};

	${Text}
	${TextCommon}
	
	&.form-init {
		box-shadow: 0 0 3px ${({ theme }) => theme.palette.accent.brighter};
	}
`;

const Button = styled.button`
	padding: 0.5rem;
	border-width: 0;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.palette.accent.default};
	// box-shadow: 0 0 3px ${({ theme }) => theme.palette.accent.brighter};
	color: ${({ theme }) => theme.palette.primary[100]};
	${Text}

	&:hover {
		transform: scale(1.1);
	}
	&:active {
		transform: scale(1);
	}
`;

export { FormSection, SectionTitle, TextBox, TextField, Button };
