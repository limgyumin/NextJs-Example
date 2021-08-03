import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

import { IPost } from "types/post.type";

export type CommonAction = ActionType<typeof actions>;

export type CommonState = {
  loading: boolean;
  error: AxiosError | null;
  data: {
    page: number;
    total: number;
    posts: IPost[];
  };
};
