'use client'
import React from 'react'
import styled from 'styled-components'

import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '900'] })
export default function AboutMe() {


    return (
        <Wrapper>
            <Heading>About Me</Heading>
            <Description>
                I am a 29-year-old professional born and raised in Troy, Alabama. Following the completion of my advanced diploma at Hoover High School in 2013, I pursued higher education at Troy University. During my sophomore year, I welcomed my first child into the world, now proud to be a father of three beautiful girls. In addition to my academic pursuits, I ventured into the realm of freelance web/mobile and graphic design during my spare time.
            </Description>
            <Description>
                Seeking to enhance my skills in software engineering, I joined the Covalence coding cohort during the summer of 2016. This 12-week immersive software engineering boot camp focused on mastering JavaScript and expanding my knowledge in software development.
            </Description>

            <Description>
                Since then, I have been dedicated to advancing my career in software development, with a particular emphasis on honing my skills in JavaScript. My journey has been marked by a passion for creating meaningful digital experiences, and I am excited about the opportunities that lie ahead in this dynamic field.
            </Description>


        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: linear-gradient(to right, #94BBE9, #DCDFAB);
    padding: 32px;
    border-radius: 24px;
    box-shadow: 7px 10px 18px 0px rgba(0,0,0,0.75);
`
const Heading = styled.h3`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: #001F3F;
    font-size: 48px;
    z-index: 99;
    margin: 0;
    
`
const Description = styled.h4`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: white;
    font-size: 24px;
    z-index: 99;
`