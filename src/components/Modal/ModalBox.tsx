import { ModalProps } from "./index";
import React from "react";
import styled from "styled-components";

export function ModalBox(props: ModalProps) {
  const { children, onClose, header } = props;

  return (
    <ModalBoxWrapper onClick={(e) => e.stopPropagation()}>
      <Header>
        {header}
        <CrossButton onClick={onClose}>X</CrossButton>
      </Header>

      {children}
    </ModalBoxWrapper>
  );
}

const ModalBoxWrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 3px;
  max-width: 90vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CrossButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
`;

export default ModalBox;
