import React from 'react'
import Link from 'next/link'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'

const projects = [
  {
    name: '学术工作',
    desc: '《A Reconfigurable Intelligent Surface Aided Dual-Function Radar and Communication System》',
    url: 'https://ieeexplore.ieee.org/document/9743509',
  },
   {
    name: '喜欢的音乐',
    desc: '喜欢的音乐',
    url: 'https://music.163.com/playlist?id=905514656&userid=582971318',
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
