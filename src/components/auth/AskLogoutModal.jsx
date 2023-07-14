import AskModal from "../common/AskModal";

const AskLogoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="로그아웃"
      desc="로그아웃 하시겠습니까?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskLogoutModal;
