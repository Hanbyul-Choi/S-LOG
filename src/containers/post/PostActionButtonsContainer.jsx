import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __updatePost, __writePost } from "../../redux/modules/post";
import PostActionButtons from "../../components/post/PostActionButtons";
import { v4 as uuidv4 } from "uuid";
import { sanitizeOption } from "../../hooks/htmlFilter";
import sanitizeHtml from "sanitize-html";

const PostActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, error, post, user, originalPostId } = useSelector(({ post, user }) => ({
    title: post.title,
    body: post.body,
    tags: post.tags,
    error: post.error,
    post: post.post,
    user: user.user,
    originalPostId: post.originalPostId,
  }));
  let newBody = body;
  if (newBody) {
    newBody = sanitizeHtml(newBody, sanitizeOption);
  }

  const onPublish = () => {
    if (originalPostId) {
      dispatch(__updatePost({ title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      __writePost({
        post: {
          title,
          body,
          tags,
        },
        username: user.username,
        id: uuidv4(),
        publishedDate: Date.now(),
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { id, username } = post;
      navigate(`/${username}/${id}`);
    }
    if (error) {
      console.log(error);
    }
  }, [navigate, post, error]);

  return <PostActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId} />;
};

export default PostActionButtonsContainer;
