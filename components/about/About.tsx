import MeImg from '@/public/me.jpg'
import { motion, Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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

const About = () => {
  return (
    <section className="flex text-white container items-center justify-center text-center flex-col gap-5 mt-10">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="rounded-md overflow-hidden"
      >
        <Image src={MeImg} alt="Nattapol Eiamsa-Ard" width={200} height={200} />
      </motion.div>

      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
        className="font-semibold uppercase text-xl"
      >
        Nattapol Eiamsa-Ard
      </motion.h1>

      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.5,
        }}
        className="text-xl"
      >
        Hi! I&apos;m Vaan 👋🏻
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.6,
        }}
        className="text-2xl lg:text-4xl leading-tight"
      >
        Website developer.
      </motion.div>

      <motion.p
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.7,
        }}
        className="text-second"
      >
        a junior{' '}
        <span className="underline underline-offset-2 text-primary-green">Web Developer.</span> I
        specialize in Front-end, <br /> responsive web design and visual development.
      </motion.p>

      <motion.a
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.8,
        }}
        className="pl-6 pr-3 py-4 rounded-lg border text-primary-green hover:text-primary-navy font-bold flex items-center justify-center gap-2 hover:bg-primary-green duration-300 mt-5"
        href="/Resume.pdf"
        download
      >
        Download Resume
        <ArrowDown className="inline-block animate-bounce w-5 h-5" strokeWidth={2} />
      </motion.a>
    </section>
  )
}

export default About
