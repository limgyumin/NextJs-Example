import axios from "axios";
import { PostsParams, PostsResponse } from "types/post.type";

import { BASE_URL } from "config/config.json";

export const fetchPostsRequest = async ({ page, limit }: PostsParams) => {
  const url = `${BASE_URL}/post`;

  const params = {
    offset: (page - 1) * limit,
    limit,
  };

  const { data } = await axios.get<PostsResponse>(url, { params });

  return data;
};
