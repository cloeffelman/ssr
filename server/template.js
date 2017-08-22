export default ({ body, title, helmet }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
        ${helmet.meta.toString()}
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/assets/bundle.js"></script>
    </html>
  `
}
