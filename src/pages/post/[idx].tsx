import { GetServerSidePropsResult, NextPage } from "next";

import { wrapper } from "store";
import { fetchPostPromise } from "utils/dispatch/promiseDispatch";

import Post from "components/Post";

type Props = unknown;

const PostPage: NextPage<Props> = () => {
  return <Post />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx): Promise<GetServerSidePropsResult<Props>> => {
    const { idx } = ctx.query;

    await Promise.all([fetchPostPromise(store, Number(idx))]);

    return;
  }
);

export default PostPage;
