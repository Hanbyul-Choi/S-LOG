import React, { useCallback, useEffect } from "react";
import Editor from "../../components/post/Editor";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeInput } from "../../redux/modules/post";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ post }) => ({
    title: post.title,
    body: post.body,
  }));

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initializeInput());
    };
  }, [dispatch]);

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
