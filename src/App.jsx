// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';


// function App() {
  

//   return (
//     <div className='App'>
//       <Header
//         titulo='MyTinerary'
//       />
//     </div>
//   );
// }


const App = () => {
  return (
    <div>
      <Header />
      {/* Aquí puedes agregar el contenido de tu aplicación */}
      <h1>Contenido de la aplicación</h1>
    </div>
  );
};

export default App