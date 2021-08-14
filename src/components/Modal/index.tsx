import React from "react";

import ModalBase from "./ModalBase";
import ModalBox from "./ModalBox";

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  const { onClose, children } = props;
  return (
    <ModalBase onClose={onClose}>
      <ModalBox onClose={onClose}>{children}</ModalBox>
    </ModalBase>
  );
}

export default Modal;
