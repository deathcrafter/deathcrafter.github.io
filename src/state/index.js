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
    const posts = await axios.get(
      "https://deathcrafter-dev.herokuapp.com/posts",
      {
        tag: get(selectedTag),
      }
    );
    return posts.data;
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
        const post = await axios.post("http://localhost:3002/posts/id", {
          id: _id,
        });
        return post.data;
      } else {
        return { body: "Post ID is empty!" };
      }
    } catch (err) {
      return { body: err.message };
    }
  },
});

export { selectedTag, selectedPosts, selectedPostId, selectedPost };
