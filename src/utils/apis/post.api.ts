import axios from "axios";
import { PostResponse, PostsParams, PostsResponse } from "types/post.type";

import config from "config/config.json";

export const fetchPostsRequest = async ({
  page,
  limit,
}: PostsParams): Promise<PostsResponse> => {
  const url = `${config.BASE_URL}/post`;

  const params = {
    offset: (page - 1) * limit,
    limit,
  };

  const { data } = await axios.get<PostsResponse>(url, { params });

  return data;
};

export const fetchPostRequest = async (idx: number): Promise<PostResponse> => {
  const url = `${config.BASE_URL}/post/${idx}`;

  const { data } = await axios.get<PostResponse>(url);

  return data;
};
