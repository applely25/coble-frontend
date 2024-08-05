import { DownArrow } from '@/assets/icon/DownArrow';
import { theme, font } from '@/styles';
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
  width = '220px',
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

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${(props) => props.width};
`;

export const DropdownBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: max-content;
  height: 48px;
  padding: 14px;

  background: ${theme.extra.white};
  border-radius: 8px;
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
  border-radius: 8px;
  border-color: ${theme.blue[300]};
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  width: 100%;
  top: 56px;
`;

export const DropdownList = styled.div`
  width: inherit;
  background: ${theme.extra.white};
`;

export const DropdownItem = styled.p`
  ${font.B1}
  display: flex;
  align-items: center;

  width: inherit;
  height: 40px;
  padding: 14px;
`;
