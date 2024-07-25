export const codeFormattingArrayList = (code: any) =>
  JSON.stringify(code, null, 6)
    .replace(']', '')
    .replace(';', '')
    .replace(/ {8}/g, '    ')
    .replace(/  {2}/g, '   ')
    .replace(/"+[a-z]+":/gm, (match) => match.replace(/"/g, ''))
    .trim();

export const codeFormattingObject = (code: any) =>
  JSON.stringify(code, null, 6)
    .replace(/ {8}/g, '    ')
    .replace(/  {2}/g, '   ')
    .replace('}', '    };')
    .replace(/"+[a-z]+":/gm, (match) => match.replace(/"/g, ''))
    .trim();
