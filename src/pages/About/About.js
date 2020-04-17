import React, {useState, useEffect} from 'react';
import './About.scss'; 
import LazyLoad from 'react-lazyload';
import Awards_card from './Awards_card';
import $ from 'jquery'; 
import {getData, getToken} from '../../store/actions';

import {ButtonDecorate} from '../../components/ButtonDecorate/index';
import LazyPhotoLoad from '../../components/LazyPhotoLoad/LazyPhotoLoad';
import Preloader from '../../components/Preloader/Preloader';

const awardsArr = [
  {
    title_first: "DEZEEN",
    title_second: "Hospitality design", 
    img: 'img/about/awards/restaurant.png'
  }, 
  {
    title_first: "DEZEEN",
    title_second: "Hospitality design",  
    img: 'img/about/awards/dezeen.png'
  },
  {
    title_first: "ART SPACE",
    title_second: "Modern interior of the house",  
    img: 'img/about/awards/art_space.png'
  },
  {
    title_first: "DEZEEN",
    title_second: "Hospitality design", 
    img: 'img/about/awards/elle_deco.png'
  },
  {
    title_first: "DEZEEN",
    title_second: "Hospitality design",
    img: 'img/about/awards/iida.png'
  },
  {
    title_first: "DEZEEN",
    title_second: "Hospitality design", 
    img: 'img/about/awards/sbid.png'
  },
  {
    title_first: "ART SPACE",
    title_second: "Modern interior of the house", 
    img: 'img/about/awards/frame.png'
  },
  {
    title_first: "DEZEEN",
    title_second: "Hospitality design", 
    img: 'img/about/awards/interiorgoda.png'
  }
]

const About = ({screenWidth, language, setAboutPage, aboutPage}) => {
  const [openAwards, setOpenAwards] = useState(true);
  const [awardsCardsHeight, setAwardsCardsHeight] = useState(null); 

  useEffect(() => {
    setAboutPage(false)
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token => {
        getData("http://yova.praid.com.ua/api/about", token, '', language, '', '')
          .then(data => setAboutPage(data))
        })
      .catch(err => console.log(err)); 
  }, [])

  useEffect(() => {
    if (screenWidth > 560) {
      $('.awards__cards').css('height', 'auto')
      return 
    }; 
    if (awardsCardsHeight) return
    setAwardsCardsHeight($('.awards__cards').innerHeight())
    setOpenAwards(false)
   
  }, [screenWidth])

  
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
                image="img/about/yova_yager.jpeg" 
                alt="Yova Yager"
              />
              <div className="content_text">
                <span className="title">
                  YOVA YAGER
                </span>
                <p className="text">  
                  {language === 'en' ? 'Yova is a Ukrainian socially responsible hospitality designer who has been enjoying designing restaurants, bars, and hotels with an  “All You Need is Love/Yova” approach since 2014.' : 'Yova - український соціальний відповідальний дизайнер гостинності, який із 2014 року любив проектувати ресторани, бари та готелі з підходом «Все, що потрібно - це любов / Йова».'}  
                </p> 
                <p className="text">
                  {language === 'en' ? 'Yova is more than just a designer. She fills the space and people with her special energy, never-ending childlike wholeness, joy and ironic attitude. Her designs are known for their functionality, attention to detail, and a high level of professionalism; they have the same feeling of charm and humor, and always contain a very important message: keep the planet safe and living species cared for.' : 'Йова - це не просто дизайнер. Вона наповнює простір і людей своєю особливою енергією, нескінченною дитячою цілісністю, радістю та іронічним ставленням. Її конструкції відомі своєю функціональністю, увагою до деталей та високим рівнем професіоналізму; вони мають однакове почуття чарівності та гумору, і завжди містять дуже важливе повідомлення: бережіть планету в безпеці, а про живих видів доглядають.'}
                </p>
                <p className="text">
                  {language === 'en' ? 'Yova’s work makes her clients, partners and friends rethink the future and self- projection in that future.' : 'Робота Йови змушує її клієнтів, партнерів та друзів переосмислювати майбутнє та самопроектувати у цьому майбутньому.'}
                </p>
                <p className="text_special">
                  {language === 'en' ? 'Yova Yager means being in love with Yova.' : 'Йова Ягер означає закохатись у Йову.'}
                </p>
              </div>
            </div>
            <div className="about__content-studio">
              <div className="content_text">
                <p className="text_special">
                  {language === 'en' ? `We offer the rethinking first, and the design afterwards. \n IT’S TIME TO RETHINK.` : `Ми пропонуємо переосмислити спочатку, а дизайн потім. \n настав час переосмислення`} 
                </p>
                <span className="title">
                  {language === 'en' ? "Yova yager studio" : "Студія Йови Йагер"}
                </span>
                <div className="text_block">
                  <p className="text">
                    {
                      language === 'en' ? 'Yova Yager’s studio is an extension of her personality; a rainbow-like trail you want to catch and touch. Yova preserves the intimacy of her niche studio so she can protect her business values; focus only on one object at a time; travel and learn; and get involved in social projects, to which Yova donates a lot of her time.' : 'Студія Йови Ягер - це продовження її особистості; райдужну стежку, яку хочеться зловити і доторкнутися. Йова зберігає близькість своєї нішевої студії, щоб вона могла захищати свої ділові цінності; зосередження уваги лише на одному об’єкті; подорожувати та вчитися; та брати участь у соціальних проектах, на які Йова дарує багато свого часу.'
                    }
                  </p> 
                  <p className="text">
                    {
                      language === 'en' ? 'Yova’s studio has the same mission as Yova herself: transmitting the essence of her philosophy of rethinking one’s own-self in nowadays context and pace.' : 'Студія Йови має таку ж місію, як і сама Йова: передавати суть своєї філософії переосмислення власного Я в сучасних умовах та темпі.'
                    }
                  </p>
                  <p className="text">
                    {
                      language === 'en' ? 'Design is an incredible instrument to reflect the entrepreneur`s position in hospitality business in particular and at the same time challenge them to carry on ethical, aesthetical, and social responsibilities. Since in our urban fast-moving and fast-changing hectic world, people tend to congregate in places like bars, cafes and restaurants a hospitality designer can provide a tremendous influence on humanity.' : 'Дизайн - це неймовірний інструмент, який відображає позицію підприємця в галузі гостинності, зокрема, і одночасно кидає їм виклик виконувати етичні, естетичні та соціальні обов`язки. Оскільки в нашому міському швидкоплинному та швидко мінливому світі, люди, як правило, збираються у таких місцях, як бари, кафе та ресторани, дизайнер гостинності може забезпечити величезний вплив на людство.'
                    }
                  </p>
                </div>
              </div>
              <LazyPhotoLoad 
                actualClass="content_photo" 
                image="/img/about/studio.jpeg" 
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
                awardsArr.map(({title_first, title_second, img}) => 
                  <Awards_card 
                    title_first={title_first}
                    title_second={title_second} 
                    img={`/${img}`} 
                    key={img}
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