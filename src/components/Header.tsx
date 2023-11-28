'use client'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })
export default function Header() {


    return (
        <Wrapper>
            <Content>
                <div>
                    <Title>Kimani Walker</Title>
                    <Title>Software Engineer</Title>
                    <Title>Crafting Digital Experiences | JavaScript, TypeScript, React, Next.js Enthusiast</Title>
                </div>
                <Image src="/headshot.png" width={368} height={368} alt='headshot' />
            </Content>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 480px;
    width: 100%;
    max-width: 1440px;
    background-color: yellow;
    display: flex;
    align-items: center;
`
const Title = styled.h1`
    font-family: ${raleway.style.fontFamily};
    color: white;
    font-size: 48px;
    z-index: 99;
`
const Content = styled.div`
    width: 100%;
    justify-content: space-around;
    display: flex;
    padding: 32px;
`