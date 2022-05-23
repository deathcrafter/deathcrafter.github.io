import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "react-loading";

import { Container, Section, SectionTitle, CardGrid, Card } from "../About/style";
import { FormSection, TextBox, TextField, Button } from "./style";

export default function Contact(props) {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		const MySwal = withReactContent(Swal);

		if (
			data.name &&
			data.email.match(
				/[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
			) &&
			data.body
		) {
			MySwal.fire({
				title: <p>Sending mail...</p>,
				iconHtml: <Loading type="bubbles" color="#9b78ff" />,
				showConfirmButton: false,
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
			});
			try {
				const response = await axios.post(
					// "http://localhost:3002/message", {
					"https://deathcrafter.herokuapp.com/message/",
					{
						message: {
							...data,
						},
					}
				);
				if (response.data.success) {
					MySwal.update({
						title: "Message Sent",
						html: <p>You will be contacted shortly. Thank you for contacting us :)</p>,
						icon: "success",
						iconHtml: undefined,
						showConfirmButton: true,
						allowOutsideClick: true,
						allowEscapeKey: true,
					});

					for (let node of document.getElementsByClassName("contact-form")) {
						node.value = "";
						node.classList.remove("valid");
						node.classList.remove("invalid");
						node.classList.add("form-init");
					}
				} else {
					throw new Error("Message not sent");
				}
			} catch {
				MySwal.update({
					title: "Message Not Sent",
					html: <p>Please try again at a later time :(</p>,
					icon: "error",
					iconHtml: undefined,
					showConfirmButton: true,
					allowOutsideClick: true,
					allowEscapeKey: true,
				});
			}
		} else {
			let message = "We can't send an email on that adress :(";
			if (!data.name || !data.email || !data.body) {
				message = "Some fields seem blank :(";
			}

			MySwal.fire({
				title: <p>Error</p>,
				html: <p>{message}</p>,
				icon: "error",
				confirmButtonText: "Okay",
			});
		}
	};

	const setValid = (node, valid) => {
		node.classList.remove("form-init");
		if (!valid) {
			node.classList.remove("valid");
			node.classList.add("invalid");
		} else {
			node.classList.remove("invalid");
			node.classList.add("valid");
		}
	};

	return (
		<>
			<Helmet>
				<title>Contact</title>
			</Helmet>
			<Container>
				<FormSection onSubmit={handleSubmit(onSubmit)}>
					<SectionTitle>Contact</SectionTitle>
					<TextBox
						{...register("name")}
						className="contact-form form-init"
						placeholder="John Doe"
						onChange={(e) => setValid(e.target, e.target.value)}
					/>
					<TextBox
						{...register("email")}
						className="contact-form form-init"
						placeholder="johndoe@mail.com"
						onChange={(e) =>
							setValid(
								e.target,
								e.target.value.match(
									/[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
								)
							)
						}
					/>
					<TextField
						{...register("body")}
						className="contact-form form-init"
						placeholder="Just wanted a new website :D"
						onChange={(e) => setValid(e.target, e.target.value)}
					/>
					<Button type="submit">Submit</Button>
				</FormSection>
				<Section>
					<SectionTitle>Socials</SectionTitle>
					<CardGrid>
						<Card
							id="mail"
							icon="./images/gmail.svg"
							text="Mail"
							href="mailto:me@deathcrafter.dev"
						/>
						<Card
							id="github"
							icon="./images/github.svg"
							text="GitHub"
							href="https://github.com/deathcrafter/"
						/>
						<Card
							id="deviantart"
							icon="./images/deviantart.svg"
							text="Deviantart"
							href="https://deviantart.com/deathcrafter18/"
						/>
						<Card
							id="twitter"
							icon="./images/twitter.svg"
							text="Twitter"
							href="https://twitter.com/deathcrafterDev/"
						/>
						<Card
							id="telegram"
							icon="./images/telegram.svg"
							text="Telegram"
							href="https://telegram.me/death_crafter/"
						/>
						<Card
							id="instagram"
							icon="./images/instagram.svg"
							text="Instagram"
							href="https://instagram.com/death.crafter/"
						/>
						<Card
							id="facebook"
							icon="./images/facebook.svg"
							text="Facebook"
							href="https://www.facebook.com/shaktijeet.17/"
						/>
					</CardGrid>
				</Section>
				<div style={{ display: "flex", marginBottom: "6rem" }} />
			</Container>
		</>
	);
}
