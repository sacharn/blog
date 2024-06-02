import React from 'react'
import Link from 'next/link'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'

const projects = [
  {
    name: '国际会议',
    desc: '最佳论文——2022 第二届IEEE联合通信与传感国际研讨会（JC&S）',
    url: 'https://ieeexplore.ieee.org/document/9743509',
  },
  {
    name: '硕士论文',
    desc: 'IRS增强的DFRC系统联合波束成形优化设计',
    url: 'https://kns.cnki.net/kcms2/article/abstract?v=_Kb8wOrUs9snwrPTbbOt7bLzAt0JHeURdx7JlwNJoEOgK-HVx1oUP0k0aq8EYqkCLOc6ySWpTdSOnyTKthts_V1lVGFo3al0EmUuWEw4Q8-4b7DX4Oiy09uNZg_WaYWfIdSRgk2e_2iGXoAV9ZlktQ==&uniplatform=NZKPT&language=CHS',
  },
   {
    name: '负责的产品',
    desc: '设备保修期及权益查询',
    url: 'https://consumer.huawei.com/cn/support/warranty-query/',
  },
  {
    name: '中国专利',
    desc: '基于物联网云平台的发电机运行监测系统',
    url: 'https://kns.cnki.net/kcms2/article/abstract?v=_Kb8wOrUs9uqNZZ9HlKJhCIWvfLiJFmZEJsxdtC_4r5ic-bEBddZZXGcQ-6BvkV8Co7BkDKcVA4ZAgqYwhLsOfOOXBPsPkNXpyg9jWuqVXbQ0150eQy4NCyAxcSmshGI_Z4jqHj4VvI=&uniplatform=NZKPT&language=CHS',
  },
  {
    name: '经验分享',
    desc: '暑期实习经验分享',
    url: 'https://scie.njupt.edu.cn/2021/0908/c2863a202553/page.htm',
  },
]

const Projects = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 -mx-3 sm:-mx-4 mt-6">
      {projects.map(project => (
        <Link
          className="group relative flex flex-col p-3 sm:p-4 gap-1.5 rounded-xl sm:hover:bg-zinc-400/10 transition-colors"
          key={project.name}
          href={project.url}
          target="_blank"
        >
          <h3 className="font-medium">{project.name}</h3>
          <span className="text-zinc-400 dark:text-zinc-500">{project.desc}</span>
          <DesktopOnly>
            <ArrowRight className="absolute right-2.5 bottom-2.5 text-zinc-300 dark:text-zinc-600 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
          </DesktopOnly>
        </Link>
      ))}
    </div>
  )
}

export default Projects
