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

  return <PostList loading={loading} error={error} posts={posts} showWriteButton={user} />;
};

export default PostListContainer;
