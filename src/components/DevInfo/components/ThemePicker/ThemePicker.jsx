import React from 'react'

import "./ThemePicker.css"

const ThemePicker = ({appTheme,handleAppTheme}) => {
    let lines = new Array(9).fill(0);
  return (
    <div className="custom-theme-picker">
        <input onClick={handleAppTheme} type="checkbox"  />
        <div className="star-container">
            <div className={`star`}></div>
            <div className={`moon-crest ${appTheme == "light" ? 'crest-moon' : ''}`}></div>
            {lines.map((_,idx)=>(
                <div key={idx} style={{"--rotate":`${45 * idx}deg`}} className={`line-container`}>
                    <div className={`line ${idx%2 != 0 ? 'short-line' : ''} ${appTheme == "light" ? "hide-rays" : ""}`}></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ThemePicker