module.exports = {
  name: 'Sacharn',
  title: 'Sacharn',
  description: '记录，自有其意义',
  avatar: '/avatar.jpg',
  logo: '/logo.svg',
  siteUrl: 'https://www.sacharn.online',
  // icon 请在 src/components/Profile.tsx 中修改
  links: [
    { name: 'GitHub', link: 'https://github.com/sacharn' },
    { name: 'sacharn' },
    { name: 'RSS', link: '/feed.xml' },
    
  ],
  friends: [
    { name: '程普', link: 'https://juejin.cn/user/26044008768029' },
    { name: '阮一峰', link: 'https://www.ruanyifeng.com/blog/' },
    { name: 'Airing', link: 'https://blog.ursb.me/' },
    { name: '酷 壳 – COOLSHELL', link: 'https://coolshell.cn/' },
    { name: 'labuladong', link: 'https://labuladong.online/algo/' },
    { name: 'bearblog热门', link: 'https://bearblog.buzzing.cc/' },
    { name: 'steve精选', link: 'https://arc.net/space/F379BCF7-0597-4C0C-803E-862A1E6DBDD4' },
    
  ],
  waytosea: [
    { name: 'Generate. Refine. Ship.', link: 'https://v0.dev/' },
    { name: 'vercel', link: 'https://vercel.com/' },
    { name: 'cloudflare', link: 'https://www.cloudflare-cn.com/' },
    { name: 'upstash', link: 'https://upstash.com/' },
    { name: 'daisyui', link: 'https://daisyui.com/' },
    { name: 'jike精选', link: 'https://web.okjike.com/originalPost/6579a1e0492ec2e1bb31b0a6' },
    
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
