"use client";

import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";

import Modal from "./modal";

const EditModal = () => {
  const { onClose, isOpen } = useModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      description="test edit"
      isOpen={isOpen}
      onChange={onChange}
      title="TEST edit"
    >
      <p>Edit</p>
    </Modal>
  );
};
export default EditModal;
