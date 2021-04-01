module.exports = {
  title: 'Iceworks',
  dest: 'public',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-multimd-table'))
    }
  }
}