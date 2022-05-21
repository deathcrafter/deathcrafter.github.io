import axios from "axios";
import { atom, selector } from "recoil";

const selectedTag = atom({
	key: "selectedTag",
	default: "",
});

const selectedPosts = selector({
	key: "selectedPosts",
	default: [],
	get: async ({ get }) => {
		const { data } = await axios.post(
			"https://deathcrafter.herokuapp.com/posts",
			// "http://localhost:3002/posts",
			{
				tag: get(selectedTag),
			}
		);
		// console.log(posts.data);
		data.sort((a, b) => Date.parse(a.date) > Date.parse(b.date));
		return data.reverse();
	},
});

const selectedPostId = atom({
	key: "selectedPostId",
	default: "",
});

const selectedPost = selector({
	key: "selectedPost",
	default: {},
	get: async ({ get }) => {
		try {
			const _id = get(selectedPostId);
			if (_id !== "") {
				const { data } = await axios.post(
					"https://deathcrafter.herokuapp.com/posts/id",
					// "http://localhost:3002/posts/id",
					{
						id: _id,
					}
				);
				console.log(data);
				return data;
			} else {
				return { body: "Post ID is empty!" };
			}
		} catch (err) {
			return { body: err.message };
		}
	},
});

export { selectedTag, selectedPosts, selectedPostId, selectedPost };
