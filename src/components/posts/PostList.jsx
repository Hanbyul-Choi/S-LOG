import React from "react";
import { styled } from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import Tags from "../common/Tags";
import SubInfo from "../common/SubInfo";
import { Link } from "react-router-dom";
import { removeHtmlAndShorter } from "../../hooks/htmlFilter";

const PostItem = ({ post }) => {
  const { publishedDate, username, id } = post;
  const { title, body, tags } = post.post;
  const bodyText = removeHtmlAndShorter(body);
  // console.log(bodyText);
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/posts/${username}/${id}`}>{title}</Link>
      </h2>
      <SubInfo username={username} publishedDate={publishedDate} has_margin_top="true" />
      <Tags tags={tags} />
      <p>{bodyText}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <>
      <PostListBlock>
        <WritePostButtonWrapper>
          {showWriteButton && (
            <Button cyan to="/post">
              새 글 작성하기
            </Button>
          )}
        </WritePostButtonWrapper>
        {!loading && posts && (
          <div>
            {posts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </div>
        )}
      </PostListBlock>
    </>
  );
};

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding: 3rem 0;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 2rem;
    margin: 0 auto;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

export default PostList;
