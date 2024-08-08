import { DownArrow } from '@/assets/icon/DownArrow';
import { flex, theme, font } from '@/styles';
import { styled } from '@linaria/react';
import { useState } from 'react';

export type ItemType = {
  text: string;
};

interface PropTypes {
  describe: string;
  items: ItemType[];
  width?: string;
  val: ItemType | undefined;
  setVal: React.Dispatch<React.SetStateAction<ItemType | undefined>>;
}

const Dropdown = ({
  val,
  setVal,
  describe,
  items,
  width = '150px',
}: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const clickItem = (item: ItemType) => {
    setVal(item);
    toggleOpen();
  };

  return (
    <DropdownContainer width={width}>
      <DropdownBox onClick={toggleOpen}>
        <Describe>{val?.text ? val.text : describe}</Describe>
        <DownArrow fill="#606DDE" width="20px" />
      </DropdownBox>
      <DropdownListBox isOpen={isOpen}>
        <DropdownList>
          {items.map((item: ItemType, idx) => (
            <DropdownItem
              key={'dropdown ' + idx}
              onClick={() => clickItem(item)}
            >
              {item.text}
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownListBox>
    </DropdownContainer>
  );
};

export default Dropdown;

export const DropdownContainer = styled.div<{ width: string }>`
  position: relative;
  ${flex.COLUMN_CENTER}
  gap: 8px;

  width: ${(props) => props.width};
  border: 1px solid ${theme.blue[300]};
  border-radius: 24px;
  color: ${theme.blue[300]};
`;

export const DropdownBox = styled.div`
  ${flex.BETWEEN}

  width: 100%;
  height: 44px;
  padding: 24px;

  background: ${theme.extra.white};
  border-radius: 24px;
  border-width: 1;
  border-color: ${theme.blue[300]};

  cursor: pointer;
`;

export const Describe = styled.p`
  ${font.B1};
  margin-right: 5px;
`;

export const DropdownListBox = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 10;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  width: 100%;
  top: 56px;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.25);
`;

export const DropdownList = styled.div`
  width: inherit;
  color: ${theme.extra.black};
  background: ${theme.extra.white};
`;

export const DropdownItem = styled.p`
  ${font.B1}
  ${flex.VERTICAL};

  width: inherit;
  height: 40px;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.gray[200]};
  &:last-child {
    border-bottom: none;
  }
`;
