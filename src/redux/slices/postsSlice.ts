import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for Post
interface Post {
  id: number;
  title: string;
  description: string;
}

// Define initial state with explicit type
const initialState: Post[] = [
  { id: 1, title: "post 1", description: "description 1" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{ id: number; title: string; description: string }>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      return state.filter((post: Post) => post.id !== postId);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;