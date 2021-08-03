import { useSelector } from "react-redux";
import { RootState } from "store/modules";

export const useFetchPosts = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.common
  );
  const { posts } = data;

  return {
    posts,
  };
};
