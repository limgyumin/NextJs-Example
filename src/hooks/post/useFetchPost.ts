import { useSelector } from "react-redux";
import { RootState } from "store/modules";

export const useFetchPost = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.post
  );

  return {
    post: data,
  };
};
