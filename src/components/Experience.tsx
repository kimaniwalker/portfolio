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
            <JobTitleSubheading><span>Engineer</span> | April 2022 - Present </JobTitleSubheading>
            <ul>
            </ul>

            <JobTitle>Shipt</JobTitle>
            <JobTitleSubheading><span>Associate Engineer</span> | September 2021 - April 2022</JobTitleSubheading>
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
            <JobTitleSubheading><span>Technical Support Engineer</span> | Jan 2019 - October 2021 </JobTitleSubheading>
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
    padding: 32px;
`
const Heading = styled.h3`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: #001F3F;
    font-size: 48px;
    z-index: 99;
    margin-top: 0;
`
const Description = styled.li`
    font-family: ${raleway.style.fontFamily};
    font-weight: 400;
    color: #333333;;
    font-size: 18px;
    z-index: 99;
    margin: 8px;
`
const JobTitle = styled(Heading)`
    font-size: 32px;
    margin: 0;
    color: #333333;;
`
const JobTitleSubheading = styled(Heading)`
    font-size: 24px;
    color: #333333;

    span {
        color: white;
    }
`