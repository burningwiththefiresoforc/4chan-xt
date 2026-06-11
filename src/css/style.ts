// == Create CSS for Link Title Favicons == //
// style.ts
export const icons = (data: { name: string, data: string }[]) => (
  '/* Link Title Favicons */\n' +
  data.map(({ name, data }) =>
    `.linkify.${name}::before {
       content: "";
       background: transparent url('${data}') center left no-repeat !important;
       padding-left: 18px;
     }\n`
  ).join('')
);
