import { design, flex, theme } from '@/styles';
import { styled } from '@linaria/react';

interface ButtonType {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface CheckModalProps {
  cancelButton?: ButtonType;
  approveButton?: ButtonType;
  children?: React.ReactNode;
}

const DefaultCancelButton = {
  title: '취소하기',
  onClick: () => {},
};
const DefaultApproveButton = {
  title: '저장하기',
  onClick: () => {},
};

export default function CheckModal({
  cancelButton = DefaultCancelButton,
  approveButton = DefaultApproveButton,
  children,
}: CheckModalProps) {
  return (
    <Backdrop>
      <Container>
        <FormContainer>{children}</FormContainer>
        <ButtonContainer>
          <button onClick={cancelButton.onClick}>{cancelButton.title}</button>
          <button onClick={approveButton.onClick}>{approveButton.title}</button>
        </ButtonContainer>
      </Container>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  background-color: rgba(112, 112, 112, 0.3);
  width: 100dvw;
  height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  padding: 32px;
  border-radius: 32px;
  background-color: ${theme.extra.white};

  ${flex.COLUMN_FLEX}
  gap: 24px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  ${flex.FLEX}
  gap: 16px;
  > button {
    &:first-child {
      ${design.BUTTON_GRAY}
      padding: 16px;
    }
    &:last-child {
      ${design.BUTTON_PRIMARY}
      padding: 16px;
    }
    width: 100%;
  }
`;
