import React from "react";
import styled from "styled-components";

import PostItem from "components/PostItem";

import { useFetchPosts } from "hooks/post/useFetchPosts";

type Props = unknown;

const Main: React.FC<Props> = () => {
  const { posts } = useFetchPosts();

  return (
    <Container>
      <Wrapper>
        <List>
          {posts.map((post) => (
            <PostItem key={post.idx} post={post} />
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
`;

export default Main;
