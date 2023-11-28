'use client'
import React from 'react'
import styled from 'styled-components'

import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '400', '900'] })
export default function Experience() {


    return (
        <Wrapper>
            <Heading>Experience</Heading>

            <JobTitle>Shipt</JobTitle>
            <JobTitleSubheading>Engineer | April 2022 - Present </JobTitleSubheading>
            <ul>
                <Description>
                    Architecting, engineering, and leading an effort to new features improving engagement, add to cart, and checkout conversion metrics.
                </Description>
                <Description>
                    Collaborate with designers in Figma to brainstorm, tweak, and implement new features.
                </Description>
                <Description>
                    Work with data science partners to set up Segment analytics tracking and A/B testing.
                </Description>
                <Description>Build performant, pixel-perfect React components that communicate with REST APIs.</Description>
                <Description>Meet weekly with associate engineers to mentor, investigate bugs, and pair-program together.</Description>
                <Description>
                    Assisted in the migration from redux to react query thus helping improve readability and performance.
                </Description>
                <Description>
                    Worked with the marketing and design team to implement a native product advertising model to the web app. This introduced a new and significantly profitable revenue stream for the company.
                </Description>
            </ul>

            <JobTitle>Shipt</JobTitle>
            <JobTitleSubheading>Associate Engineer | September 2021 - April 2022 </JobTitleSubheading>
            <ul>
                <Description>Assisting marketing team with building landing pages.</Description>
                <Description>
                    Build CMS tools which allows marketing to customize and edit marketing content.
                </Description>
                <Description>
                    Collaborate with designers in Figma to brainstorm, tweak, and implement new features.
                </Description>
                <Description>
                    Documentation of new processes and content.
                </Description>
                <Description>
                    Setup e2e test and CICD pipelines.
                </Description>

            </ul>

            <JobTitle>SAP</JobTitle>
            <JobTitleSubheading>Technical Support Engineer | Jan 2019 - October 2021 </JobTitleSubheading>
            <ul>
                <Description>Provide technical support for SAP cloud commissions product while delivering quality and timely
                    results per SLA</Description>
                <Description>
                    Escalates problems beyond level of expertise to manager or more experienced staff
                </Description>
                <Description>
                    Test and document cloud application upgrade related issues.
                </Description>
                <Description>
                    Build SQL scripts to assist with backend functionality.
                </Description>
                <Description>
                    Check logs and database for server and application related issues.
                </Description>
                <Description>
                    Build knowledge base articles with solutions and workarounds for issues.
                </Description>

            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: green;
    padding: 32px;
`
const Heading = styled.h3`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: white;
    font-size: 48px;
    z-index: 99;
    margin-top: 0;
`
const Description = styled.li`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: white;
    font-size: 18px;
    z-index: 99;
    margin: 8px;
`
const JobTitle = styled(Heading)`
    font-size: 32px;
    margin: 0;
`
const JobTitleSubheading = styled(Heading)`
    font-size: 24px;
`