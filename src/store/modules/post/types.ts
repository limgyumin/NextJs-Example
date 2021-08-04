import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";

import * as action from "./action";

import { IPost } from "types/post.type";

export type PostAction = ActionType<typeof action>;

export type PostState = {
  loading: boolean;
  error: AxiosError | null;
  data: IPost;
};
