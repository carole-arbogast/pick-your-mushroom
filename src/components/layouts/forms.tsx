import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 25em;
`;

export const Input = styled.input`
  /* max-width: 90%; */
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

export const TextArea = styled.textarea`
  resize: vertical;
`;

export const Required = styled.span`
  color: red;
`;

export const Label = styled.label`
  font-size: 0.85rem;
`;

export const Select = styled.select`
  border: 1px solid grey;
  padding: 0.25rem;
`;
