import ModalBase from "./ModalBase";
import ModalBox from "./ModalBox";
import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  header?: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { onClose, children, header } = props;
  return (
    <ModalBase onClose={onClose}>
      <ModalBox onClose={onClose} header={header}>
        {children}
      </ModalBox>
    </ModalBase>
  );
}

export default Modal;
