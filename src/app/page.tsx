'use client'
import AboutMe from "@/components/AboutMe"
import Experience from "@/components/Experience"
import Header from "@/components/Header"
import styled from "styled-components"

export default function Home() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <AboutMe />
        <Experience />
      </ContentWrapper>
    </Wrapper>
  )
}

const ContentWrapper = styled.section`
max-width: 1440px;
width: 100%;
`
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgb(220,223,171);
  background: linear-gradient(175deg, rgba(220,223,171,1) 15%, rgba(148,187,233,1) 28%, rgba(220,223,171,1) 100%);
`
