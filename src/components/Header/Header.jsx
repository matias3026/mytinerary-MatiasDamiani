import React from 'react';
// #realizar la importacion

function Header({titulo}) {
    return(

        <nav>
            <div className="nav-wrapper light-blue darken-2"> 
                <img src="src\assets\logo 1.png" alt="logo de mytinerary" />
            </div>

            <div>
                <ul>
                    <li>Viajes</li>
                    <li>Hospedajes</li>
                    <li>Actividades</li>


                </ul>
            </div>
            <div>
                <a href="#!" className="brand-logo" >{titulo}
                    <img src="src\assets\usuariogene2.jpg" alt="log de usuario generico" />
                    <p>Ingresar</p>               
                </a>


            </div>





        </nav>
        





    )

}
  
export default Header;
  