import React from 'react';
import { virtualTourImg } from '../../img/index';

function AccueilService() {
  return (
    <div>
        <div>
            <p>Numérisation numérique 3D / Visites virtuelles</p>
            <h1>Explorez le monde depuis chez vous</h1>
            <p>Les visites virtuelles permettent aux entreprises de faire des inspections, des évaluations et des présentations à distance, éliminant ainsi la nécessité de déplacements et de réunions coûteuses, ce qui se traduit par des économies de temps et d'argent considérables.</p>
            <button>Voir les démos</button>
            <button>Demander un scan</button>
        </div>
        <div>
            <img src={virtualTourImg} alt="Caméra 3D qui est utilisé par Tecnova pour faire des visites virtuelles." />
        </div>
    </div>
  )
}

export default AccueilService