import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

import { IPost } from "types/post.type";

export const FETCH_POST = "post/FETCH_POST";
export const FETCH_POST_SUCCESS = "post/FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "post/FETCH_POST_FAILURE";

export const fetchPostAsync = createAsyncAction(
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
)<void, IPost, AxiosError>();
