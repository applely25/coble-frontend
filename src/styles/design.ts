import { font, theme } from '.';

const design = {
  BUTTON_WHITE: {
    padding: '4px 16px',
    borderRadius: '16px',
    border: `1px solid ${theme.blue[500]}`,
    color: theme.blue[500],
    transition: 'background-color 0.2s, color 0.2s',
    ...font.B1,
  },
  BUTTON_PRIMARY: {
    padding: '4px 16px',
    borderRadius: '16px',
    backgroundColor: theme.blue[500],
    color: theme.blue[50],
    transition: 'background-color 0.2s, color 0.2s',
    ...font.B1,
  },
  BUTTON_GRAY: {
    padding: '4px 16px',
    borderRadius: '16px',
    backgroundColor: theme.gray[50],
    color: theme.extra.black,
    transition: 'background-color 0.2s, color 0.2s',
    ...font.B1,
  },
};

export default design;
