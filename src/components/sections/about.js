import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Karolina, I am based in Paris, France, and I enjoy science and
              innovations. My interest in the blockchain ecosystem started back in 2017 when I have
              attended a TEDxIHEParis speech on the the possibilities of this technology. On one
              heand, once enrolled in my Master of Science, I have got involved in the biggest
              student society specialized in blockchain in France,{' '}
              <a href="https://kryptosphere.org/en/">KRYPTOSPHERE</a>. I have learnt there the
              basics of blockchain and cryptos, participated and organized hackathons and events,
              and espacially met beautiful and passionate people. The most remarquable events were
              the organization of the 2020 and 2021 editions of the NASA Space Apps Challenge, as
              the Head of the Paris location, and my engagement in a one-year research group on the
              role of the blockchain in sustainable supply chain for the Hyperledger Global Forum.
            </p>

            <p>
              On the other hand, I have built a strong interest for cybersecurity issues through
              these years. I have academically specialized in the security of distributed systems,
              obtaining in 2022 the title of Information Systems Security Expert, ISSE, issued by
              the National Security Agency, ANSSI, in addition of my Engineering Diploma.
            </p>

            <p>
              Thus, combining my knownledge on blockchain and security seemed natural, especially as
              this field that is still largely unexplored. I started by analyzing the sector and had
              the chance to co-write{' '}
              <a href="https://drive.google.com/file/d/1g4D4z6vFEp1ye4SerlmmU0eDwipVGSOL/view">
                a study
              </a>
              with the brilliant Alexandre Stachtchenko and Vincent Maret on the state of the art of
              the crypto audit market, the techniques used to secure blockchain infra and code, and
              its future. The results, showing a very large lack of experts in this domain, pushed
              me to invest myself technically in order to contribute to the security of the web3
              ecosystem in general.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/GORNA-Karolina_photo.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
