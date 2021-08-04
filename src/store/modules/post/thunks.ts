import { ThunkAction } from "redux-thunk";

import { PostAction } from "./types";
import { RootState } from "..";
import { fetchPostAsync } from "./action";
import { fetchPostRequest } from "utils/apis/post.api";

export const fetchPostThunk = (
  idx: number
): ThunkAction<void, RootState, void, PostAction> => {
  return async (dispatch) => {
    const { request, success, failure } = fetchPostAsync;

    dispatch(request());

    try {
      const { data } = await fetchPostRequest(idx);

      dispatch(success(data));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
