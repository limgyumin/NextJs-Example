import { createAction, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

import { PostsPayload } from "types/post.type";

export const FETCH_POSTS = "common/FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "common/FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "common/FETCH_POSTS_FAILURE";

export const INCREASE_PAGE = "common/INCREASE_PAGE";

export const fetchPostsAsync = createAsyncAction(
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
)<void, PostsPayload, AxiosError>();

export const increasePage = createAction(INCREASE_PAGE)<void>();
