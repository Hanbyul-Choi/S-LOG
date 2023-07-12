import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import { __listPosts } from "../../redux/modules/posts";

const PostListContainer = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(({ posts, user }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: posts.isLoading,
    user: user.user,
  }));

  useEffect(() => {
    const tag = searchParams.get("tag");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(__listPosts({ tag, username, page }));
  }, [dispatch, searchParams, username]);

  if (loading) return null;

  // 최신순 필터링 TODO: 좋아요 기능 탑재 시 인기순 정렬도 해야함.
  let sort = "publishedDate";
  // let sortedPosts = JSON.parse(JSON.stringify(posts));
  let sortedPosts = JSON.parse(JSON.stringify(posts));
  // if (sortWay === "like") sort = "likeCount";
  // else if (sortWay === "time") sort = "date";
  if (posts) {
    sortedPosts.sort((a, b) => b[sort] - a[sort]);
  }

  return <PostList loading={loading} error={error} posts={sortedPosts} showWriteButton={user} />;
};

export default PostListContainer;
