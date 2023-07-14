import AskModal from "../common/AskModal";

const AskPostModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="게시글 올리기"
      desc="게시글은 수정이 가능합니다. 지금 올리시겠습니까?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskPostModal;
