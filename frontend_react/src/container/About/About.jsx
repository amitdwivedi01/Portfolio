import React, {useState, useEffect} from 'react'
import './About.scss';
import {motion} from 'framer-motion'

import { AppWrap } from '../../wrapper';

// import {images} from '../../constants'
import { urlFor, client } from '../../client';


// const abouts = [
//   {title: 'Web Developer', Description: 'I am a good web developer', imgUrl: images.about01},
//   {title: 'Web Designer', Description: 'I am a good web designer', imgUrl:images.about02},
//   {title: 'Web Animations', Description: 'I am a good web animator', imgUrl:images.about03},
//   {title: 'UI/UX', Description: 'I am a good UI/UX designer ', imgUrl:images.about04},
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(()=> {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data); 
    })
  }, []);

  return (
    <>
    <h2 className='head-text'>I Known that <span>Good Design </span><br/> means <span> Good Business</span> </h2>
    <div className='app__profiles'>
       {abouts.map((about, index)=>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type:'tween'}}
        className='app__profile-item'
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
       ))}
    </div>
    </>
  )
}

export default AppWrap(About, 'About')