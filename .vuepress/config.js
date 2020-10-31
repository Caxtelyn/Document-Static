module.exports = { 
title: 'Axton Docs', 
description: `Never Give Up`, 
dest: 'public',
locales: {
    '/': {
	    lang: 'zh-CN',
    }
},
plugins: ['@vuepress/nprogress'],
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
      lastUpdated: 'Last Updated',
      sidebar: 'auto',
  }}
