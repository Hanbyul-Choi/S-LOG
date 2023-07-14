import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../common/Button";
import { createPortal } from "react-dom";
import AskPostModal from "./AskPostModal";
import AskUpdateModal from "./AskUpdateModal";

const PostActionButtons = ({ onCancel, onPublish, isEdit, disabled }) => {
  const [modal, setModal] = useState(false);
  const onPostClick = () => {
    setModal(true);
  };
  const onModalCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onPublish();
  };

  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan="true" onClick={onPostClick} disabled={disabled}>
        포스트 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
      {createPortal(
        isEdit ? (
          <AskUpdateModal visible={modal} onConfirm={onConfirm} onCancel={onModalCancel} />
        ) : (
          <AskPostModal visible={modal} onConfirm={onConfirm} onCancel={onModalCancel} />
        ),
        document.getElementById("portal-target")
      )}
    </WriteActionButtonsBlock>
  );
};

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

export default PostActionButtons;
