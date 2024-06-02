module.exports = {
  name: 'Sacharn',
  title: 'Sacharn',
  description: '哈哈哈哈哈',
  avatar: '/avatar.jpg',
  logo: '/logo.svg',
  siteUrl: 'https://www.sacharn.online',
  // icon 请在 src/components/Profile.tsx 中修改
  links: [
    { name: 'GitHub', link: 'https://github.com/sacharn' },
    { name: 'X', link: 'https://twitter.com/sacharn' },
    { name: 'RSS', link: '/feed.xml' },
    
  ],
  friends: [
    { name: '赖同学', link: 'https://www.laibh.com' },
    { name: '鯊手', link: 'https://www.cnblogs.com/Scooby' },
    { name: '戴兜', link: 'https://im.daidr.me' },
    { name: 'lufangzhou', link: 'https://zhoufanglu.github.io/vuepressBlog' },
    { name: 'wallleap', link: 'https://myblog.wallleap.cn' },
  ],
  // en | zh-CN
  language: 'zh-CN',
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 90,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: false,
  },
  backToTopButton: true
}
