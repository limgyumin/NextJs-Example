import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "store/modules";

export const createThunkDispatch = (dispatch: Dispatch<AnyAction>) => {
  return dispatch as ThunkDispatch<RootState, void, AnyAction>;
};
