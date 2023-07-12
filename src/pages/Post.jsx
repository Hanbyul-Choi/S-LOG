import React from "react";
import EditorContainer from "../containers/post/EditorContainer";
import TagBoxContainer from "../containers/post/TagBoxContainer";
import PostActionButtonsContainer from "../containers/post/PostActionButtonsContainer";
import Responsive from "../components/common/Responsive";

function Post() {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <PostActionButtonsContainer />
    </Responsive>
  );
}

export default Post;
