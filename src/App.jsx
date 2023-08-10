// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomeContent from './HomeContent';
// import Citys from './components/city/Citys'; // Importa el componente Citys

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomeContent} /> {/* Ruta para HomeContent */}
//         <Route path="/cities" component={Citys} /> {/* Ruta para Citys */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContent from './HomeContent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        {/* Agrega más rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default App;

