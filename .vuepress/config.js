module.exports = { title: '文档', description: `文件归档`, themeConfig: { nav: [ { text: '主页', link: '/' }, { text: '论坛规范', link: '/rules/community' }, ], }, dest: 'docs',
plugins: ['vuepress-plugin-nprogress'],
plugins: ['vuepress-plugin-smooth-scroll'],
  plugins: [
    [
      'vuepress-plugin-zooming',
      {
              selector: '.my-wrapper .my-img',
              delay: 1000,
              options: {
	                bgColor: 'black',
	                zIndex: 10000,
	              },
            },
    ],
  ],
  themeConfig: {
      smoothScroll: true,
      docsRepo: 'Caxtelyn/Document',
      docsDir: 'docs',
      docsBranch: 'main',
      editLinks: true,
      editLinkText: '在Github上编辑此页',
      lastUpdated: '最后更新时间'
}}
