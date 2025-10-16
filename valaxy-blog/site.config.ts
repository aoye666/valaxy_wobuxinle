import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: 'aoye的小站',
  author: {
    name: 'aoye',
  },
  description: '别看啦，这个站没啥内容',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
  ],

  search: {
    enable: false,
  },
})
