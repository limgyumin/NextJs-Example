import { ThunkAction } from "redux-thunk";
import { PostsParams, PostsPayload } from "types/post.type";
import { fetchPostsRequest } from "utils/apis/post.api";
import { RootState } from "..";
import { fetchPostsAsync } from "./actions";
import { CommonAction } from "./types";

export const fetchPostsThunk = (
  params: PostsParams
): ThunkAction<void, RootState, void, CommonAction> => {
  return async (dispatch) => {
    const { request, success, failure } = fetchPostsAsync;

    dispatch(request());

    try {
      const { data } = await fetchPostsRequest(params);

      const payload: PostsPayload = {
        posts: data.posts,
        total: data.postCount,
      };

      dispatch(success(payload));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
