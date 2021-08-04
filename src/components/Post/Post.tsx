import React, { useMemo } from "react";
import styled from "styled-components";

import { useFetchPost } from "hooks/post/useFetchPost";
import { getDateFormat } from "utils/libs/dateFormat.lib";

type Props = unknown;

const Post: React.FC<Props> = () => {
  const { post } = useFetchPost();
  const { title, description, content, created_at } = post;

  const formatted = useMemo(() => getDateFormat(created_at), [created_at]);

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <CreatedAt>{formatted}</CreatedAt>
        <Description>{description}</Description>
        <Content>{content}</Content>
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
  max-width: 700px;
  padding: 8rem 0;
`;

const Title = styled.h1`
  font-size: 3.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

const CreatedAt = styled.p`
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ftBlack};
  margin-top: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ftGray};
  margin: 3rem 0;
`;

const Content = styled.p`
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ftBlack};
  margin-top: 2rem;
  white-space: pre-wrap;
`;

export default Post;
