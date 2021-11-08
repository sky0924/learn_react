import React from 'react';
import './Palette.css';
import { HiOutlinePlus } from 'react-icons/hi';

const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={ `color ${active && 'active' }` }
      style={ { background: color } } 
      onClick={ onClick }></div>
  )
}

const Palette = ({ colors, selected, onSelect }) => {
  const colorList = colors.map(
    (color) => (<Color 
      color={ color } 
      active={ selected===color } 
      onClick={ () => onSelect(color) } 
      key={ color }/>)
  );
  return (
    <div className="palette">
      { colorList }
      <div className="plus">
        <HiOutlinePlus />
      </div>
      {/* <div className="back">
        <img src="back.png" alt="back" />
      </div> */}
    </div>
  );
};

export default Palette;