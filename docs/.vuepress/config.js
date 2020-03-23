module.exports = {
  themeConfig: {
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
