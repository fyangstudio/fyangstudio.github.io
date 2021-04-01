
const path = require('path');
const genSidebar = require('./utils/genSidebar');
const filehelper = require('./utils/initPage.js');

const rootpath = path.dirname(__dirname);

function concatJs() {
  const arr = genSidebar('JavaScript', filehelper.getFileName(rootpath), false);
  return arr;
}

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
    sidebar: concatJs(),
  }
}