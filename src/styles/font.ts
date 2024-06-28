const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
) => ({
  fontWeigth: weight,
  fontSize: `${size}rem`,
  lineHeight: `${lineHeight}%`,
  letterSpacing: `${letterSpacing}px`,
});

const font = {
  H1: fontGenerator(700, 3.6, 150, 0),
  H2: fontGenerator(700, 3.2, 150, 0),
  H3: fontGenerator(500, 2.8, 143, 0),
  H4: fontGenerator(500, 2.4, 150, 0),
  H5: fontGenerator(500, 2, 140, 0),

  B1: fontGenerator(500, 1.6, 150, 0),
  B2: fontGenerator(400, 1.6, 150, 0),
  B3: fontGenerator(500, 1.4, 143, 0),
  B4: fontGenerator(400, 1.4, 143, 0),

  C1: fontGenerator(500, 1.2, 150, 0),
  C2: fontGenerator(400, 1.2, 150, 0),
  C3: fontGenerator(500, 1.2, 134, 0),
  C4: fontGenerator(400, 1.2, 134, 0),
};

export default font;
