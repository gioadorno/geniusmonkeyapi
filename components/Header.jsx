import { motion } from 'framer-motion';
import Link from 'next/link';


const Header = () => {
  return (
    <motion.nav
      initial={{
        y: -200,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
       className='sticky top-0 hidden md:flex p-6 w-full h-16 shadow-xl bg-white justify-between items-center grid-cols-3 z-50'>
            <motion.div
            initial={{
            x: -200,
            opacity: 0
            }}
            animate={{
            x: 0,
            opacity: 1
            }}
            transition={{
            duration: 2
            }}
            className='flex items-center justify-start'>
            <div className='cursor-pointer hover:animate-pulse transition ease-in-out duration-200 flex'>
                <img src='/photo.jpg' className='h-7 w-7 rounded-full'/>
                <p className='font-semibold pl-3 text-xl'>
                Genius Monkey
                </p>
            </div>
            </motion.div>
            <motion.div
            initial={{
                y: -200,
                opacity: 0
                }}
                animate={{
                y: 0,
                opacity: 1
                }}
                transition={{
                duration: 2.5
                }}
                className='flex flex-col items-center justify-center'
            >
                <p className='text-xs'>Scroll to:</p>
                <div className='flex space-x-5'>
                    <Link href='#intro'>
                        <button className='text-xl hover:text-orange-700 text-gray-500 hover:animate-pulse hover:scale-105 transform duration-300 ease-in'>
                            Intro
                        </button>
                    </Link>
                    <Link href='#form'>
                        <button className='text-xl hover:text-orange-700 text-gray-500 hover:animate-pulse hover:scale-105 transform duration-300 ease-in'>
                            Form
                        </button>
                    </Link>
                </div>
            </motion.div>
            <motion.div
            initial={{
            x: 200,
            opacity: 0
            }}
            animate={{
            x: 0,
            opacity: 1
            }}
            transition={{
            duration: 2
            }}
            className='flex justify-end items-center group cursor-default'>
            Hello <span className='group-hover:text-orange-700 group-hover:animate-pulse transition duration-200 ease-in-out pl-2'>Future Teammates!</span>
            </motion.div>
      </motion.nav>
  )
}

export default Header