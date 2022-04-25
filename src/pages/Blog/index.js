import { Helmet } from "react-helmet";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedPosts } from "../../state";
import { PostSection, PostContainer, PostTitle, PostDate, PostDescription } from "./style";
import * as dayjs from "dayjs";
import Post from "../../components/Post";

function Posts(props) {
	const retrievedPosts = useRecoilValue(selectedPosts);
	return (
		<>
			{retrievedPosts.map((post) => {
				// console.log(post);
				return (
					<PostContainer
						to={`posts/${post._id}`}
						key={post._id}
						// onClick={() => handleClick(post.id)}
					>
						<PostTitle>{post.title}</PostTitle>
						<PostDate>📆 {dayjs(post.date).format("MMMM DD, YYYY")}</PostDate>
						<PostDescription>{post.description}</PostDescription>
					</PostContainer>
				);
			})}
		</>
	);
}

export default function Blog(props) {
	// const [tagSelected, setTagSelected] = useRecoilState(selectedTag);
	// console.log(retrievedPosts);

	return (
		<PostSection>
			<Helmet>
				<title>Blog</title>
			</Helmet>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<h1>Loading stuff...</h1>}>
							<Posts />
						</Suspense>
					}
				/>
				<Route path="/posts/:id" element={<Post />} />
			</Routes>
		</PostSection>
	);
}
