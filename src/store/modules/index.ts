import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import common from "./common";
import { CommonState } from "./common";

type State = {
  common: CommonState;
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
      });
      return reducer(state, action);
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
