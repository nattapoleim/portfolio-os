import { motion, Variants } from 'framer-motion'
import { BookUser, Facebook, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

interface SocialListType {
  icon: React.ReactNode
  path: string
  title: string
}

interface ContactListType {
  icon: React.ReactNode
  text: string
  path?: string
  role?: string
}

const socialList: SocialListType[] = [
  {
    icon: <Facebook size={30} className="group-hover:text-primary-green duration-300" />,
    path: 'https://www.facebook.com/vaanies/',
    title: 'Facebook',
  },
  {
    icon: <Instagram size={30} className="group-hover:text-primary-green duration-300" />,
    path: 'https://www.instagram.com/vhale_vaan/',
    title: 'Instagram',
  },
  {
    icon: <Linkedin size={30} className="group-hover:text-primary-green duration-300" />,
    path: 'https://www.linkedin.com/in/nattapol-eiamsa-ard-385880262/',
    title: 'Linkedin',
  },
  {
    icon: <Github size={30} className="group-hover:text-primary-green duration-300" />,
    path: 'https://github.com/nattapoleim',
    title: 'Github',
  },
]

const contactList: ContactListType[] = [
  {
    icon: <Mail size={30} className="group-hover:text-primary-green duration-300" />,
    text: 'nattapol.eim@gmail.com',
    path: 'mailto:nattapol.eim@gmail.com',
    role: 'email',
  },
  {
    icon: <Phone size={30} className="group-hover:text-primary-green duration-300" />,
    text: '+66 99 282 9915',
  },
  {
    icon: <BookUser size={30} className="group-hover:text-primary-green duration-300" />,
    text: 'Pattaya, Chonburi, Thailand. 20150',
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

const Contact = () => {
  return (
    <section className="flex px-4 items-center flex-col mb-10 gap-10 mt-10">
      <motion.h2
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="text-5xl font-semibold uppercase text-primary-green"
      >
        Contact
      </motion.h2>
      <div className="flex flex-col items-start gap-6 lg:gap-4">
        {contactList.map((link, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 + 0.1 * index }}
            className="border group hover:border-primary-green w-full border-primary-lightestslate rounded-md p-4 flex justify-start items-center duration-300 gap-4 hover:shadow-md hover:shadow-primary-green"
          >
            {link.icon}
            {link.role === 'email' ? (
              <a
                href={link.path}
                className="hover:underline group-hover:text-primary-green duration-300"
              >
                {link.text}
              </a>
            ) : (
              <p className="group-hover:text-primary-green duration-300">{link.text}</p>
            )}
          </motion.div>
        ))}

        <motion.div className="grid grid-cols-2 lg:flex items-center justify-between w-full gap-4">
          {socialList.map((link, index) => (
            <motion.a
              key={index}
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.7 + 0.1 * index }}
              href={link.path}
              target="_blank"
              className="border group hover:border-primary-green border-primary-lightestslate rounded-md p-4 w-full lg:w-fit flex justify-start gap-4 items-center duration-300 hover:shadow-md hover:shadow-primary-green"
            >
              {link.icon}
              <p className="block lg:hidden">{link.title}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
