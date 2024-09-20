import { useState, useEffect } from 'react';

const useBeautifyHtml = (
  inputHtml: string,
  setInputHtml: React.SetStateAction<React.Dispatch<string>>,
) => {
  const [beautifiedHtml, setBeautifiedHtml] = useState<string>('');

  const beautifyHtml = (html: string): string => {
    const tokens = html
      .replace(/>\s+</g, '><') // Remove spaces between tags
      .split(/(<[^>]+>)/g) // Split by tags
      .filter(Boolean); // Remove empty strings

    let indentLevel = 0;
    const indentSize = 4;

    const selfClosingTags = new Set([
      'br',
      'hr',
      'img',
      'input',
      'link',
      'meta',
      'source',
      'track',
      'wbr',
    ]);

    const prettyHtml = tokens.map((token) => {
      const isOpeningTag = token.startsWith('<') && !token.startsWith('</');
      const isClosingTag = token.startsWith('</');
      const tagNameMatch = token.match(/^<\s*\/?\s*([^\s/>]+)/);
      const tagName = tagNameMatch ? tagNameMatch[1] : '';

      if (isClosingTag) {
        indentLevel -= 1;
      }

      const line = ' '.repeat(indentLevel * indentSize) + token.trim();

      if (isOpeningTag && !isClosingTag && !selfClosingTags.has(tagName)) {
        indentLevel += 1;
      }

      return line;
    });

    return prettyHtml.join('\n').trim();
  };

  const beautifyCss = (css: string): string => {
    const lines = css.split(/(?<=;|{|})\s*/); // Split CSS by semicolon or brackets
    let indentLevel = 4; // Start CSS indent from 1 (since it's inside <style>)

    return lines
      .map((line) => {
        if (line.includes('}')) {
          indentLevel -= 1;
        }

        const indentedLine = ' '.repeat(indentLevel * 4) + line.trim();

        if (line.includes('{')) {
          indentLevel += 1;
        }

        return indentedLine;
      })
      .join('\n')
      .trim();
  };

  useEffect(() => {
    let html = inputHtml;

    // Handle CSS inside <style> tags
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
    html = html.replace(styleRegex, (_, css) => {
      const beautifiedCss = beautifyCss(css);
      return `<style>\n${beautifiedCss}\n</style>`;
    });

    setBeautifiedHtml(beautifyHtml(html));
  }, [inputHtml]);

  return { beautifiedHtml };
};

export default useBeautifyHtml;
