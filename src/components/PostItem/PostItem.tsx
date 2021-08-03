import Link from "next/link";
import React, { useMemo } from "react";
import styled from "styled-components";
import { ellipsis } from "styles/util";

import { IPost } from "types/post.type";
import { getDateFormat } from "utils/libs/dateFormat.lib";

type Props = {
  post: IPost;
};

const PostItem: React.FC<Props> = ({ post }) => {
  const { idx, title, description, content, created_at } = post;

  const formattedDate = useMemo(() => getDateFormat(created_at), [created_at]);

  return (
    <Link href={"/post/[idx]"} as={`/post/${idx}`}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Content>{content}</Content>
        <CreatedAt>{formattedDate}</CreatedAt>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  margin: 0.6rem 0;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.425rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.ftBlack};
  margin-bottom: 0.6rem;
  ${ellipsis(1)}
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ftBlack};
  margin-bottom: 1rem;
  ${ellipsis(2)}
`;

const Content = styled.p`
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ftGray1};
  margin-bottom: 1rem;
  ${ellipsis(4)}
`;

const CreatedAt = styled.p`
  font-size: 0.95rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

export default PostItem;
