import React, { useState } from 'react';
import './WorkPage.scss';

import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';
import WorkPageGallery from '../WorkPageGallery/WorkPageGallery';
import MassonryGallery from '../MassonryGallery/MassonryGallery';

const WorkPage = () => {
  const [showDetails, setShowDetails] = useState(false); 

  return (  
    <section className="work">
      <div className="wrapper">
        <div className="work__image">
          <img src="/img/work/altruist.png" alt="Altruist" />
        </div>
        <h1 className="work__left-mobtitle">
          Alltrueeast Van
        </h1>
        <div className={`work__info ${showDetails === true ? null : 'work__info-invisible'}`}>
          <div className="work__left">
            <table className="work__left-table">
              <tr>
                <td>Location</td>
                <td>Antonovicha st., 1, Kiev, Ukraine</td>
              </tr>
              <tr>
                <td>Function</td>
                <td>Mobile van</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>12 m2</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>Realization 2018</td>
              </tr>
              <tr>
                <td>Designer</td>
                <td>Yova Yager </td>
              </tr>
              <tr>
                <td>Art pattern</td>
                <td>Verdi</td>
              </tr>
              <tr>
                <td>Studio</td>
                <td>YOVA YAGER hospitality design</td>
              </tr>
              <tr>
                <td>Photographer</td>
                <td>Sergei Polushko</td>
              </tr>
            </table>
            <div className="work__left-button">
              <ButtonDecorate title="media kit"/>
            </div>
          </div>
          <div className="work__right">
            <h1 className="work__right-title">
              Alltrueeast Van
            </h1>
            <p className="work__right-text">
              Студия YOVA YAGER hospitality design и киевский ресторан Alltrueeast делают осознанные шаги, направленные на сохранение окружающей среды.
              <br /><br />
              Бренды заботятся об экологии, соблюдают принципы устойчивого развития и реализовывают осмысленные объекты, ориентированные на человека. В жизни ресторана это – сортировка мусора и использование перерабатываемых материалов. В жизни дизайн-студии – применение экологичных материалов, продукции локальных производителей и предложение инструментов для решения задач, стоящих перед современным обществом.
              <br /><br />
              Совместные проекты Йовы Ягер и Alltrueeast начались с завтраков «Добре меню». На протяжении месяца можно было заказать блюда из поп-ап меню, разработанного дизайнером совместно с рестораном. После 50% собранных средств были переданы общественной организации «Україна без сміття».
            </p>
          </div>
        </div>
        <button className="work__details" onClick={() => setShowDetails(!showDetails)}>MORE DETAILS {`${showDetails === true ? '-' : '+'}`}</button>
        <WorkPageGallery />
        <h3 className='work__also'>YOU MIGHT ALSO LIKE</h3>
        <MassonryGallery title={false} backgroundY={true} button={true} />
      </div>
    </section>
  );
}
 
export default WorkPage;