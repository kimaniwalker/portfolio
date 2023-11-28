'use client'
import Header from "@/components/Header"
import styled from "styled-components"

export default function Home() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
      </ContentWrapper>
    </Wrapper>
  )
}

const ContentWrapper = styled.section`
max-width: 1440px;
width: 100%;
background-color: red;
`
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`
