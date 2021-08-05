import { FETCH_POSTS_LIMIT } from "constants/post";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/modules";
import { fetchPostsThunk, increasePage } from "store/modules/common";

export const useFetchPosts = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.common
  );
  const { page, total, posts } = data;

  const dispatch = useDispatch();

  const [lastEl, inView] = useInView({ threshold: 0.5 });

  const isFirstRendered = useRef<boolean>(true);

  const fetchPostsHandler = useCallback(() => {
    dispatch(fetchPostsThunk({ page, limit: FETCH_POSTS_LIMIT }));
  }, [page]);

  useEffect(() => {
    if (!loading && inView && posts.length < total) {
      dispatch(increasePage());
    }
  }, [inView]);

  useEffect(() => {
    if (isFirstRendered.current) {
      isFirstRendered.current = false;
    } else {
      fetchPostsHandler();
    }
  }, [fetchPostsHandler]);

  return {
    lastEl,
    posts,
  };
};
