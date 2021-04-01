const getSidebar = require('./utils/getSidebar');

module.exports = {
  title: 'Iceworks',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-multimd-table'))
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rax', link: 'https://rax.alibaba-inc.com/' },
      { text: 'ICE', link: 'https://ice.alibaba-inc.com/' },
    ],
    sidebar: getSidebar(),
  }
}