const fs = require('fs');
const path = require('path');
const glob = require("glob");
const matter = require('gray-matter');

const CATALOG_CONFIG = [
  {
    dirname: 'others',
    title: '其他',
    order: 3
  }
];

const BASE_PATH = path.join(__dirname, '../../');

function getMarkdownOrder(filename) {
  return (matter(fs.readFileSync(path.join(BASE_PATH, filename), 'utf-8')).data || {}).order;
}

function compareOrder(a, b) {
  const orderA = a.order || getMarkdownOrder(a);
  const orderB = b.order || getMarkdownOrder(b);

  return orderA - orderB;
}

function getSidebar() {
  const result = [];

  const docs = glob.sync('**/*.md', { cwd: BASE_PATH, ignore: 'README.md' });

  docs.forEach((doc) => {
    const dirname = path.parse(doc).dir;
    const catalog = CATALOG_CONFIG.find(config => config.dirname === dirname);
    if (dirname && catalog) {
      const catalogItem = result.find(item => item.dirname === dirname);
      if (!catalogItem) {
        result.push({
          ...catalog,
          collapsable: false,
          sidebarDepth: 3,
          children: [doc]
        })
      } else {
        catalogItem.children.push(doc);
      }
    } else {
      result.push(doc);
    }
  });

  result.sort(compareOrder);

  result.forEach((item) => {
    if (item.dirname) {
      item.children.sort(compareOrder);

      delete item.dirname;
      delete item.order;
    }
  })

  return result;
}

module.exports = getSidebar;
