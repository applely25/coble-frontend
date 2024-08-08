import { flex, theme } from '@/styles';
import { styled } from '@linaria/react';

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
}

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${theme.blue[500]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingContainer = styled.div`
  ${flex.CENTER}
  height: 100vh;
`;
