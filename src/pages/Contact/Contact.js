import React from 'react'
import './Contact.scss'
import MainWaveAnimatione from '../../components/MainWaveAnimation/MainWaveAnimatione';


const Contact = ({language}) => {

  return (
    <section className="contact">
     <div className="wrapper">
      <div className="contact__info"> 
        <span className="contact__info-title">{language === 'en' ? 'BE FREE TO CONTACT US' : 'ЗВЕРТАЙТЕСЬ ДО НАС'}</span> 
          <div className="contact__info-content">
          <table>
            <tr>
              <th>
                {language === 'en' ? 'E-mail' : 'Пошта'}
              </th>
              <td>
                <a href="mailto:hello@yovayager.com">hello@yovayager.com</a>
              </td>
            </tr>
            <tr className="telephone">
              <th>
                {language === 'en' ? 'Phone Numbers' : 'Номера телефонів'}
              </th>
              <td>
                <a href="tel:+380955388407">Tel.: +38 095 538 84 07 </a>
                <a href="tel:+380665388407">Tel.: +38 066 538 84 07</a>
              </td>
            </tr>
            <tr className="adress">
              <th>
                {language === 'en' ? 'Address' : 'Адреса'} 
              </th>
              <td>
                {
                  language === 'en' ? 'Ukraine, Kiev 01001 \n Mihaylivsky Lane, 9a, office 35' : 'Україна, Київ 01001 \n вул. Михайлівська 9а, офіс 35'
                }
              </td>
            </tr>
            <tr className='social'>
              <th>
                {language === 'en' ? 'Social' : 'Соціальні мережі'}
              </th>
              <td>
                <a href="https://www.instagram.com/yovayager/" target="_blank">Instagram</a>  
                <a href="https://www.behance.net/yovayager" target="_blank">Behance</a>
                <a href="https://www.pinterest.com/yovayager/" target="_blank">Pinterest</a> 
              </td>
            </tr>
          </table>
          <div className="qr-code">
            <span>{language === 'en' ? 'No stumps' : 'Не зволікай'}</span>
            <img src="img/contact/qr.svg" alt="qr-code" />
            <span>{language === 'en' ? 'Just QR us' : 'Просто QR нас'}</span>
          </div>
        </div>
      </div>
      <MainWaveAnimatione /> 
    </div>
    </section>
  )
}

export default Contact