import { GetServerSidePropsResult, NextPage } from "next";

import { wrapper } from "store";
import { fetchPostsPromise } from "utils/dispatch/promiseDispatch";

import Main from "components/Main";

type Props = unknown;

const MainPage: NextPage<Props> = () => {
  return <Main />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx): Promise<GetServerSidePropsResult<Props>> => {
    await Promise.all([fetchPostsPromise(store)]);

    return;
  }
);

export default MainPage;
