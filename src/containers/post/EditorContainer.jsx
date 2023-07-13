import React, { useCallback, useEffect } from "react";
import Editor from "../../components/post/Editor";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeInput } from "../../redux/modules/post";
import { useNavigate } from "react-router";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, user } = useSelector(({ post, user }) => ({
    title: post.title,
    body: post.body,
    user: user.user,
  }));

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initializeInput());
    };
  }, [dispatch]);

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  if (!user) {
    navigate("/login");
    return;
  }

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
