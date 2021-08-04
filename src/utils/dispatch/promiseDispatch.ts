import { AnyAction, Store } from "redux";

import { RootState } from "store/modules";
import { fetchPostsThunk } from "store/modules/common";

import { createThunkDispatch } from "./createThunkDispatch";

import { PostsParams } from "types/post.type";
import { FETCH_POSTS_LIMIT } from "constants/post";
import { fetchPostThunk } from "store/modules/post";

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

export const fetchPostPromise = async (
  store: Store<RootState, AnyAction>,
  idx: number
): Promise<void> => {
  const { post } = store.getState();

  const dispatch = createThunkDispatch(store.dispatch);

  if (!post.data.idx) {
    await dispatch(fetchPostThunk(idx));
  }
};
