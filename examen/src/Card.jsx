import React from 'react';

function Card({personas}) {
 
return(
<div>
    <h2>SERIE FAVORITA</h2>
    {personas.map((persona, index) => (
        <div key={index}>
          <h3>Hola {persona.nombre}, tu serie favorita es {persona.serie}</h3>
</div>

))}
</div>
);
    }

export default Card;