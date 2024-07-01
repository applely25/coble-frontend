import { font, theme } from '.';

const design = {
  BUTTON: {
    padding: '4px 16px',
    borderRadius: '16px',
    border: `1px solid ${theme.blue[500]}`,
    color: theme.blue[500],
    ...font.B1,
  },
};

export default design;
