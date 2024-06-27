import { BlocklyWorkspace } from 'react-blockly';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CodeIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
`;
