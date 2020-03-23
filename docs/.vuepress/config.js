module.exports = {
  title: '三国演义',
  description: '《三国演义》是中国文学史上第一部章回小说，是历史演义小说的开山之作，也是第一部文人长篇小说，中国古典四大名著之一。',
  evergreen: true,
  themeConfig: {
    nav: [
      {
        text: '语言',
        items: [
          { text: '简体中文', link: '/zh-CN/' },
        ]
      }
    ],
    sidebar: {
      '/zh-CN/': getzhcnSide()
    }
  }
}

function getzhcnSide() {
  return [
    {
      title: '三国演义',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3'
      ]
    }
  ]
}
