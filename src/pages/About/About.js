import React, {useState, useEffect} from 'react';
import './About.scss'; 
import LazyLoad from 'react-lazyload';
import Awards_card from './Awards_card';
import $ from 'jquery'; 
import {getData, getToken} from '../../store/actions';

import {ButtonDecorate} from '../../components/ButtonDecorate/index';
import LazyPhotoLoad from '../../components/LazyPhotoLoad/LazyPhotoLoad';
import Preloader from '../../components/Preloader/Preloader';

const About = ({language, setAboutPage, aboutPage}) => {
  const [openAwards, setOpenAwards] = useState(true);
  const [awardsCardsHeight, setAwardsCardsHeight] = useState(null); 
  const [windowWidth, setWindowWidth] = useState($(window).width()); 

  useEffect(() => {
    setAboutPage(false)
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token => getData("http://yova.praid.com.ua/api/about", token, '', language, '', '')
        .then(data => setAboutPage(data))
      )
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resize); 

    if (windowWidth > 560) {
      $('.awards__cards').css('height', 'auto')
      return 
    }; 
    if (awardsCardsHeight) return
    setAwardsCardsHeight($('.awards__cards').innerHeight())
    setOpenAwards(false)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [windowWidth])

  const resize = () => {
    setWindowWidth($(window).width())
  }

  if (!aboutPage) {
    return (
      <Preloader />
    )
  } else {
    return (
      <section className="about">
        <div className="wrapper">
          <h1 className="about__title">{language === 'en' ? "About" : "Про мене"}</h1>
          <div className="about__content">
            <div className="about__content-yova">
              <LazyPhotoLoad 
                actualClass="content_photo" 
                image={aboutPage[0].image_left}
                alt="Yova Yager"
              />
              <div className="content_text">
                {
                  aboutPage[0].text_right.split('\n').map(text => {
                    if (text.includes('#')) {
                      return (
                        <p key={text} className="title">
                          {text.replace('# ', '')}
                        </p>
                      )
                    } else if (text === '') {
                      return null
                    } else {
                      return (
                        <p className="text" key={text}>
                          {text}
                        </p>
                      )
                    }
                  })
                }
              </div>
            </div>
            <div className="about__content-studio">
              <div className="content_text">
                {
                  aboutPage[0].text_left.split('\n').map(text => {
                    if (text.includes('#')) {
                      return (
                        <p key={text} className="title">
                          {text.replace('# ', '')}
                        </p>
                      )
                    } else if (text === '') {
                      return null
                    } else {
                      return (
                        <p className="text" key={text}>
                          {text}
                        </p>
                      )
                    }
                  })
                }
              </div>
              <LazyPhotoLoad 
                actualClass="content_photo" 
                image={aboutPage[0].image_right}
                alt="Yova Yager studio"
              />
            </div>
          </div>
          <LazyLoad 
            height={80} 
            offset={100}
          >
            <div className="about__press-button">
              <a href="#" >
                <ButtonDecorate 
                  title="MEDIA KIT"
                  title_ua="Медіа комплект"
                  id="aboutPressKitButton"
                  autoStart={true}
                />
              </a>
            </div>
          </LazyLoad>
          <div className="awards">
            <h1 className="about__title">{language === 'en' ? 'AWARDS' : 'Нагороди'}</h1>
            <div className="awards__cards" 
                style={{
                  height: `${openAwards === true ? awardsCardsHeight : '680'}px` 
                }}
            >
              {
                aboutPage[1].map(({title, text, image, id}) => 
                  <Awards_card 
                    title_first={title}
                    title_second={text} 
                    img={image} 
                    key={id}
                  />)
              }
            </div>
            <button 
              className="awards__more" 
              onClick={() => setOpenAwards(!openAwards)}
            >
              {language === 'en' ? openAwards ? 'less awards' : 'more awards' : openAwards ? 'менше нагород' : 'більше нагород'} {openAwards === true ? '-' : '+'}
            </button>
          </div>
        </div>
      </section>
    )
  }  
}

export default About; 