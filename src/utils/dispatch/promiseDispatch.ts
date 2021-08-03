import { AnyAction, Store } from "redux";

import { RootState } from "store/modules";
import { fetchPostsThunk } from "store/modules/common";

import { createThunkDispatch } from "./createThunkDispatch";

import { PostsParams } from "types/post.type";
import { FETCH_POSTS_LIMIT } from "constants/post";

export const fetchPostsPromise = async (
  store: Store<RootState, AnyAction>
): Promise<void> => {
  const { common } = store.getState();

  const dispatch = createThunkDispatch(store.dispatch);

  if (!common.data.posts.length && !common.data.total) {
    const params: PostsParams = {
      page: common.data.page,
      limit: FETCH_POSTS_LIMIT,
    };

    await dispatch(fetchPostsThunk(params));
  }
};
