import React from "react";
import EditorContainer from "../containers/post/EditorContainer";
import TagBoxContainer from "../containers/post/TagBoxContainer";
import PostActionButtonsContainer from "../containers/post/PostActionButtonsContainer";
import Responsive from "../components/common/Responsive";
import { Helmet } from "react-helmet-async";

function Post() {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 S-log</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <PostActionButtonsContainer />
    </Responsive>
  );
}

export default Post;
