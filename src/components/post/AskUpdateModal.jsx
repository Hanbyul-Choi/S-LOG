import AskModal from "../common/AskModal";

const AskUpdateModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="게시글 수정하기"
      desc="지금 이대로 수정하시겠습니까?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskUpdateModal;
