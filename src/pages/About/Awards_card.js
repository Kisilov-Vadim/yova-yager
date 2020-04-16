import React from 'react';
import PropTypes from 'prop-types';

export default function Awards_card({title_first, title_second, img}) {
  return (
    <div className="awards__cards-card">
      <div className="photo">
        <img src={`http://yova.praid.com.ua${img}`} alt={title_second} />
      </div>
      <span className="title">{title_first}<br/>{title_second}
      </span>
    </div>
  )
}

Awards_card.protoTypes = {
  title_first: PropTypes.string.isRequired, 
  title_second: PropTypes.string.isRequired, 
  img: PropTypes.string.isRequired
}


