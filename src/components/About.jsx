import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, title, icon }) => {
  return <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='title' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
}
const About = () => {
  return <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Overview</p>
      <h2 className={styles.sectionHeadText}>About</h2>
    </motion.div>
    <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hello 👋 I’m <b>Jean Hoffmann</b>, a highly skilled and committed Full Stack Web & App Developer, with more than 10 years of experience developing apps and websites for many companies around the world. For most of my clients, I’m more than ‘just’ the developer. I help them grow their business by offering strategic advice for their marketing efforts as well.
    </motion.p>
    <h2 className={`text-[21px] text-white font-bold mt-4`}>WHY HIRE ME 🚀</h2>
    <motion.p variants={fadeIn("","", 0.3, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    💡 Creative and inspired to do and improve customer ideas<br />
    🎯 Attention to details<br />
    🕗 Respect deadlines<br />
    💬 Support after completion<br />
    🔥 Mentally prepared for new skills, challenges, or bugs along the way<br />
    🤝 Strong communication and collaboration skills<br />
    🎖️ I commit to hard work and dedication until you are completely satisfied with the final assignment
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
}

export default SectionWrapper(About, "about")