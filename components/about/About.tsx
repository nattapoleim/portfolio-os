import BlurFade from '@/components/magicui/blur-fade'
import ShineBorder from '@/components/magicui/shine-border'
import MeImg from '@/public/me.jpg'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="flex text-white container items-center justify-center text-center flex-col gap-5 mt-10">
      <BlurFade delay={0.25} inView>
        <div className="rounded-md overflow-hidden">
          <Image src={MeImg} alt="Nattapol Eiamsa-Ard" width={200} height={200} />
        </div>
      </BlurFade>

      <BlurFade delay={0.35} inView>
        <h1 className="font-semibold uppercase text-xl">Nattapol Eiamsa-Ard</h1>
      </BlurFade>

      <BlurFade delay={0.45} inView>
        <div className="text-xl">Hi! I&apos;m Vaan 👋🏻</div>
      </BlurFade>

      <BlurFade delay={0.55} inView>
        <div className="text-2xl lg:text-4xl leading-tight">Website developer.</div>
      </BlurFade>

      <BlurFade delay={0.65} inView>
        <p className="text-second">
          a junior{' '}
          <span className="underline underline-offset-2 text-primary-green">Web Developer.</span> I
          specialize in Front-end, <br /> responsive web design and visual development.
        </p>
      </BlurFade>

      <BlurFade delay={0.75} inView>
        <a href="/Resume.pdf" download>
          <ShineBorder
            className="bg-transparent  hover:bg-primary-lightestnavy/50 duration-200  text-primary-green flex items-center justify-center gap-2 border border-primary-slate/20"
            color={['#64ffda', '#e6f1ff', '#112240']}
          >
            Download Resume
            <ArrowDown className="inline-block animate-bounce w-5 h-5" strokeWidth={2} />
          </ShineBorder>
        </a>
      </BlurFade>
    </section>
  )
}

export default About
