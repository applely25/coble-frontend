import { font, theme } from '.';

const design = {
  BUTTON_WHITE: {
    padding: '4px 16px',
    borderRadius: '16px',
    border: `1px solid ${theme.blue[500]}`,
    color: theme.blue[500],
    ...font.B1,
  },
  BUTTON_PRIMARY: {
    padding: '4px 16px',
    borderRadius: '16px',
    backgroundColor: theme.blue[500],
    color: theme.blue[50],
    ...font.B1,
  },
};

export default design;
