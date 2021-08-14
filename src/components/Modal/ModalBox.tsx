import React from "react";
import { ModalProps } from "./index";

import styled from "styled-components";

export function ModalBox(props: ModalProps) {
  const { onClose } = props;

  return (
    <ModalBoxWrapper onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose}>X</button>
      {props.children}
    </ModalBoxWrapper>
  );
}

const ModalBoxWrapper = styled.div`
  background: white;
  padding: 0.5rem;
`;

export default ModalBox;
