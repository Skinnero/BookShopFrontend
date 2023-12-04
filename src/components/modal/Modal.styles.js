import styled from "styled-components";

export const ModalContainer = styled.div `
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div `
  padding: 1%;
  background: #E4EBF5;
  border-radius: 8px;
  max-height: 90vh;
  max-width: 90vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`