import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className='max-w-7xl flex flex-col space-y-1 items-center justify-start sm:pt-2 md:pt-56 h-screen'>
        <div className='flex space-x-4 items-center'>
            <motion.img
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 3
            }}
            viewport={{ once: true }}
            src='/photo.jpg' className='rounded-full w-7 h-7 md:w-12 md:h-12 animate-spin-slow' />
            <motion.p
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 2
            }}
            viewport={{ once: true }}
            className='text-white font-semibold text-2xl sm:text-3xl md:text-5xl'>
                Genius Monkey
            </motion.p>
        </div>
        <motion.p
            animate={{
                x: [-200, 0 ],
                opacity: [0, 1 ]
            }}
            transition={{
                duration: 4
            }}
            viewport={{ once: true }}
            className='text-orange-600 text-xl md:text-3xl font-semibold tracking-wide'>
                A smarter way to advertise
            </motion.p>
            <motion.p
            animate={{
                opacity: [0, 1 ]
            }}
            transition={{
                duration: 4
            }}
            viewport={{ once: true }}
            className='text-white pt-12 md:pt-40 text-md sm:text-2xl md:text-5xl font-semibold tracking-wide'>
                A Plaftorm built for proven results!
            </motion.p>
    </div>
  )
}

export default Intro