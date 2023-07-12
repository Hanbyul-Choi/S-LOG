import React, { useState } from "react";
import { styled } from "styled-components";
import palette from "../../lib/styles/palette";
import { createPortal } from "react-dom";
import AskDeleteModal from "./AskDeleteModal";

const PostHandleButtons = ({ onEdit, onDelete }) => {
  const [modal, setModal] = useState(false);
  const onDeleteClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onDelete();
  };

  return (
    <>
      <PostActionButtonBlock>
        <HandleButton onClick={onEdit}>수정</HandleButton>
        <HandleButton onClick={onDeleteClick}>삭제</HandleButton>
      </PostActionButtonBlock>
      {createPortal(
        <AskDeleteModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />,
        document.getElementById("portal-target")
      )}
    </>
  );
};

const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const HandleButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

export default PostHandleButtons;
