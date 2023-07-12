import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostViewer from "../../components/post/PostViewer";
import { __readPost, initializePost, setOriginPost } from "../../redux/modules/post";
import PostHandleButtons from "../../components/post/PostUpdateButtons";
import { deletePost } from "../../axios/posts";

const PostViewerContainer = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(({ post, user }) => ({
    post: post.post,
    error: post.error,
    loading: post.isLoading,
    user: user.user,
  }));

  useEffect(() => {
    dispatch(__readPost(postId));
    return () => {
      dispatch(initializePost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginPost(post));
    navigate("/post");
  };

  const onDelete = async () => {
    try {
      await deletePost(postId);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const isOwner = (user && user.username) === (post && post.username);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      HandleButtons={isOwner && <PostHandleButtons onEdit={onEdit} onDelete={onDelete} />}
    />
  );
};

export default PostViewerContainer;
