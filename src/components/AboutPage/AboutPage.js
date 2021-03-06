import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../images/lotties/male.json';
import { HTMLIcon, CodeBracesIcon, WebIcon } from '../../images/icons/icons';

const AboutPage = () => {
  return (
    <section className="about-page">
      <header className="about-page__header">
        <h1 className="about-page__heading about-page__heading--main">
          Meet Adeola Ademosu
        </h1>
      </header>
      <div className="about-page__body">
        <div className="about-page__content">
          <div className="about-page__content-left">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              style={{ maxWidth: 300 }}
              height="auto"
            />
          </div>
          <div className="about-page__content-right">
            <p className="about-page__text about-page__text--restricted">
              <strong className="about-page__text--bold"> Who am I? </strong>
              <ul className="about-page__list">
                <li className="about-page__list-item">
                  A Frontend Developer with experience developing websites and
                  web applications.
                </li>
                <li className="about-page__list-item">
                  Someone with a good grasp of Frontend development concepts.
                </li>
                <li className="about-page__list-item">
                  A self taught frontend developer with a degree in Estate
                  Managment and valuation.
                </li>

                <li className="about-page__list-item">
                  Currently making magic at{' '}
                  <a
                    href="https://thedigiscript.com/"
                    target="_blank"
                    className="about-page__link">
                    {' '}
                    Digiscript Tech Solutions.
                  </a>
                </li>
              </ul>
            </p>
            <div className="about-page__text">
              <strong className="about-page__text--bold"> What I do? </strong>
              <div className="about-page__services">
                <a
                  href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
                  target="_blank"
                  className="about-page__services-link">
                  <HTMLIcon className="about-page__services-icon" />
                  <span className="about-page__services-text">
                    Front-End Web Development
                  </span>
                </a>
                {/* <a
                  href=""
                  target="_blank"
                  className="about-page__services-link">
                  <CodeBracesIcon className="about-page__services-icon" />
                  <span className="about-page__services-text">
                    Back-End / API Development
                  </span>
                </a> */}
                {/* <a
                  href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
                  target="_blank"
                  className="about-page__services-link">
                  <WebIcon className="about-page__services-icon" />
                  <span className="about-page__services-text">
                    Full-Stack Web Development
                  </span>
                </a> */}
              </div>
            </div>

            <p className="about-page__text about-page__text--restricted">
              I'm super excited you're here. Feel free to{' '}
              <Link to="/contact" className="about-page__link">
                reach out to me{' '}
              </Link>
              with any project ideas you have or to just say hello!
            </p>
          </div>
        </div>{' '}
      </div>
    </section>
  );
};

export default AboutPage;
