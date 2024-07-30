import { useState, useEffect } from 'react';

const useBeautifyHtml = (
  inputHtml: string,
  setInputHtml: React.SetStateAction<React.Dispatch<string>>,
) => {
  // const [inputHtml, setInputHtml] = useState<string>(initialHtml);
  const [beautifiedHtml, setBeautifiedHtml] = useState<string>('');

  const beautifyHtml = (html: string): string => {
    const tokens = html
      .replace(/>\s+</g, '><') // Remove spaces between tags
      .split(/(<[^>]+>)/g) // Split by tags
      .filter(Boolean); // Remove empty strings

    let indentLevel = 0;
    const indentSize = 4;
    const selfClosingTags = new Set([
      '<br>',
      '<hr>',
      '<img>',
      '<input>',
      '<link>',
      '<meta>',
      '<source>',
      '<track>',
      '<wbr>',
    ]);
    const prettyHtml = tokens.map((token) => {
      if (token.startsWith('</')) {
        indentLevel -= 1;
      }

      const line = ' '.repeat(indentLevel * indentSize) + token;

      if (
        token.startsWith('<') &&
        !token.startsWith('</') &&
        !selfClosingTags.has(token)
      ) {
        indentLevel += 1;
      }

      return line;
    });

    return prettyHtml.join('\n').trim();
  };

  useEffect(() => {
    setBeautifiedHtml(beautifyHtml(inputHtml));
  }, [inputHtml]);

  return { beautifiedHtml };
};

export default useBeautifyHtml;
