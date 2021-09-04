import { ModalProps } from "./index";
import React from "react";
import styled from "styled-components";

export function ModalBase(props: ModalProps) {
  const { onClose } = props;
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent>{props.children}</ModalContent>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(172, 170, 170, 0.7);
  z-index: 1;
`;

const ModalContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ModalBase;
