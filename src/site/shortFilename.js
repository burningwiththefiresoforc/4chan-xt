export function shortFilename(filename) {
  const ext = filename.match(/\.?[^\.]*$/)[0];
  if ((filename.length - ext.length) > 30) {
    return `${filename.match(/(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^]){0,25}/)[0]}(...)${ext}`;
  } else {
    return filename;
  }
}
