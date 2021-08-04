import { initialPost } from "types/initialStates/post.initialState";
import { createReducer } from "typesafe-actions";
import { FETCH_POST, FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from "./action";
import { PostAction, PostState } from "./types";

const initialState: PostState = {
  loading: false,
  error: null,
  data: initialPost,
};

const posts = createReducer<PostState, PostAction>(initialState, {
  [FETCH_POST]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: initialPost,
  }),
  [FETCH_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [FETCH_POST_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: initialPost,
  }),
});

export default posts;
