import React from 'react'

function TeamIcon({active, i, data_id, onClick, iconSrc, alt, className}) {
  return (
    <div className={`imgBox ${className} ${active ? 'active' : ''}`} style={{ '--i': i }} data-id={data_id} onClick={() => onClick(data_id)}>
        <img loading="lazy" src={iconSrc} alt={alt}/>
    </div>
  )
}

export default TeamIcon