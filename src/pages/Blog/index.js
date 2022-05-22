import { Helmet } from "react-helmet";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedPosts } from "../../state";
import { Container, Section, SectionTitle } from "../About/style";
import { PostCard, PostTitle, PostDate, PostDescription } from "./style";
import * as dayjs from "dayjs";
import { LoadingPage, Post } from "../../components";

function Posts(props) {
	const retrievedPosts = useRecoilValue(selectedPosts);
	return (
		<>
			{retrievedPosts.map((post) => (
				<PostCard to={`posts/${post._id}`} key={post._id}>
					<PostTitle>{post.title}</PostTitle>
					<PostDate>📆 {dayjs(post.date).format("MMMM DD, YYYY")}</PostDate>
					<PostDescription>{post.description}</PostDescription>
				</PostCard>
			))}
		</>
	);
}

export default function Blog(props) {
	return (
		<Container>
			<Helmet>
				<title>Blog</title>
			</Helmet>
			<Routes>
				<Route
					path="/"
					element={
						<Section>
							<SectionTitle>Blog</SectionTitle>
							<Suspense fallback={<LoadingPage />}>
								<Posts />
							</Suspense>
						</Section>
					}
				/>
				<Route path="/posts/:id" element={<Post />} />
			</Routes>
		</Container>
	);
}
