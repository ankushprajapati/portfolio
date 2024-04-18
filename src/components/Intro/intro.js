import React from 'react'
import './intro.css';
import celebrity from '../../assets/celebrity.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hired.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>
            Hello,
            </span>
            <span className='introText'>
            I'm 
            <span className='introName'>
            Ankush
            </span><br/>
            Website Designer
            <p className='introPara'>
                I am a skilled web desiger with experience in creating <br/>visual appealing and user friendly websites.
            </p>
            <Link>
            <button className='btn'>
                <img src={btnImg} alt='hired' className='hired'/>
                Hire Me
            </button>
            </Link>
            </span>
        </div>
        <img src={celebrity} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
