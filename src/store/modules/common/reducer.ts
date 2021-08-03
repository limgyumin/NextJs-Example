import { createReducer } from "typesafe-actions";
import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./actions";
import { CommonAction, CommonState } from "./types";

const initialState: CommonState = {
  loading: false,
  error: null,
  data: {
    page: 1,
    total: 0,
    posts: [],
  },
};

const commons = createReducer<CommonState, CommonAction>(initialState, {
  [FETCH_POSTS]: (state) => {
    if (state.data.page === 1) {
      return {
        ...state,
        loading: true,
        error: null,
        data: { page: 1, total: 0, posts: [] },
      };
    } else {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
  },
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    if (state.data.page === 1) {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    } else {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          ...action.payload,
          posts: [...state.data.posts, ...action.payload.posts],
        },
      };
    }
  },
  [FETCH_POSTS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: {
      page: 1,
      total: 0,
      posts: [],
    },
  }),
});

export default commons;
