import dynamic from "next/dynamic";
import Modal from "@/components/UI/Modal/Modal";
import { useModalAction, useModalState } from "./Modal.context";
const FreeQuotePopup = dynamic(
  () => import("@/components/Home/PopupForm/FreeQuotePopup"),
  { ssr: false }
);
const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "FREE_QUOTE_HOME" && <FreeQuotePopup />}
    </Modal>
  );
};

export default ManagedModal;
