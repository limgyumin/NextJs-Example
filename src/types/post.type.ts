export interface IPost {
  idx: number;
  title: string;
  description: string;
  content: string;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
}

export type PostsParams = {
  page: number;
  limit: number;
};

export type PostsPayload = {
  posts: IPost[];
  total: number;
};

export type PostsResponse = {
  message: string;
  data: {
    posts: IPost[];
    postCount: number;
  };
};

export type PostResponse = {
  message: string;
  data: IPost;
};
