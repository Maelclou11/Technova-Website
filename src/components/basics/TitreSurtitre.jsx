import React from 'react'

function TitreSurtitre({surtitre, titre}) {
  return (
    <div className='TitreSurtitre'>
        <p>{surtitre}</p>
        <h2>{titre}</h2>
    </div>
  )
}

export default TitreSurtitre