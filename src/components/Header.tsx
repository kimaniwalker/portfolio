'use client'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '900'] })

export default function Header() {


    return (
        <Wrapper>
            <Content>
                <div>
                    <Title>Kimani Walker</Title>
                    <SubTitle>Software Engineer</SubTitle>
                    <SubHeading>Crafting Digital Experiences | JavaScript, TypeScript, React, Next.js Enthusiast</SubHeading>
                </div>
                <ImageWrapper><Image src="/headshot.png" fill alt='headshot' /></ImageWrapper>
            </Content>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 480px;
    width: 100%;
    display: flex;
    align-items: center;
`
const Title = styled.h1`
    font-family: ${raleway.style.fontFamily};
    color: white;
    font-size: 64px;
    z-index: 99;
    margin: 0;
    font-weight: 900;
`
const SubTitle = styled.h3`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: #001F3F;
    font-size: 48px;
    z-index: 99;
    margin: 0;
`
const SubHeading = styled.h4`
    font-family: ${raleway.style.fontFamily};
    font-weight: 100;
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
const ImageWrapper = styled.div`
    width: 368px;
    height: 368px;
    position: relative;
    flex-shrink: 0;
    object-fit: contain;
`