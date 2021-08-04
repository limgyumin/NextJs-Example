import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import common from "./common";
import post from "./post";

import { CommonState } from "./common";
import { PostState } from "./post";

type State = {
  common: CommonState;
  post: PostState;
};

const rootReducer = (
  state: State | undefined,
  action: AnyAction
): CombinedState<State> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      const reducer = combineReducers({
        common,
        post,
      });
      return reducer(state, action);
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
