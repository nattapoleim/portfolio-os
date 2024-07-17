import { motion, Variants } from 'framer-motion'
import { CircleArrowOutUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectListType {
  title: string
  img: string
  link: {
    github: string
    demo?: string
  }
  stack: string[]
}

const projectList: ProjectListType[] = [
  {
    title: 'Lush Garden',
    img: '/lush.png',
    link: {
      github: 'https://github.com/nattapoleim/lush-garden-landing-page',
      demo: 'https://nattapoleim.github.io/lush-garden-landing-page/',
    },
    stack: ['Vue 3', 'Tailwind CSS'],
  },
  {
    title: 'Todo List',
    img: '/todo.png',
    link: {
      github: 'https://github.com/nattapoleim/todo-list-vue',
      demo: 'https://todo-list-vue-silk.vercel.app/',
    },
    stack: ['Vue 3', 'Tailwind CSS', 'Pinia'],
  },
  {
    title: 'RPG Me',
    img: '/rpg.png',
    link: {
      github: 'https://github.com/nattapoleim/rpg-me',
    },
    stack: ['Vue 3', 'Tailwind CSS', 'Pinia', 'Daisy UI'],
  },
]

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const Projects = () => {
  return (
    <section className="flex items-center justify-center gap-5 flex-col">
      <motion.h2
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="text-4xl font-semibold uppercase text-primary-green"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 mb-20">
        {projectList.map((project, index) => (
          <motion.article
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 + 0.1 * index }}
            key={project.title}
            className="border rounded-md duration-200 hover:shadow-lg hover:shadow-primary-green p-4 group w-[300px]"
          >
            <div className="overflow-hidden rounded-md relative h-[200px] flex items-center justify-center">
              <Image
                src={project.img}
                alt="project"
                width={400}
                height={300}
                className="object-contain h-full"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <div className="space-y-4 flex-1">
                <p className="text-xl text-primary-green font-medium">{project.title}</p>
                <div className="text-sm space-x-4 text-primary-slate">
                  {project.stack.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-end mt-2 gap-4 flex-col text-sm justify-start">
                <Link
                  href={project.link.github}
                  className="flex group/link hover:text-primary-green duration-200 gap-2 items-center justify-end"
                >
                  Github{' '}
                  <Github size={20} className="group-hover/link:text-primary-green duration-200" />
                </Link>
                {project.link.demo && (
                  <Link
                    href={project.link.demo}
                    className="flex group/link hover:text-primary-green duration-200 gap-2 items-center justify-end"
                  >
                    Demo{' '}
                    <CircleArrowOutUpRight
                      size={20}
                      className="group-hover/link:text-primary-green duration-200"
                    />
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
