import React from 'react';
// import images
import Image1 from '../img/updoodle/instagram/1.jpg';
import Image2 from '../img/updoodle/instagram/2.jpg';
import Image3 from '../img/updoodle/instagram/3.jpg';
import Image4 from '../img/updoodle/instagram/4.jpg';
import Image5 from '../img/updoodle/instagram/5.jpg';
import Image6 from '../img/updoodle/instagram/6.jpg';
import Image7 from '../img/updoodle/instagram/7.jpg';
import Image8 from '../img/updoodle/instagram/8.jpg';
import Image9 from '../img/updoodle/instagram/9.jpg';
import Image10 from '../img/updoodle/instagram/10.jpg';
import Image11 from '../img/updoodle/instagram/11.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-80%'}}
      transition={transition1} 
      className="section"
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center
        lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%'}}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className="h1">Portfolio</h1>
            <p className='mb-12 max-w-sm'>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b>
            Maecenas nec mi in metus tincidunt auctor. Ut et velit enim.
            Nunc in rhoncus ipsum. Nunc maximus vel nulla sit amet lobortis.
            Sed ut pretium orci. Mauris sit amet viverra sem.
            <br />
            <br />
            Mauris tincidunt odio neque, a aliquam sapien finibus in.
            Vestibulum rhoncus et turpis sit amet semper.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image1}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image2}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image3}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image4}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image5}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image6}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image7}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image8}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image9}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image10}
              alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
            lg:h-[220px] bg-accent overflow-hidden'>
              {/* image */}
              <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
              src={Image11}
              alt='' />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
