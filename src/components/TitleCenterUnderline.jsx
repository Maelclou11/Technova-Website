import React from 'react'

function TitleCenterUnderline({title, className}) {
    return (
      <div className="titleService">
          <h2 className={className}>&nbsp;&nbsp;{title}&nbsp;&nbsp;</h2>
      </div>
    );
}

export default TitleCenterUnderline