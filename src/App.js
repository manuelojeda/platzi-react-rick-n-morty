import React from 'react';
import logo from './images/9OiY-rmlogo.png'
import Index from './pages/Index/Index'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={logo} alt="" className="img-fluid mx-auto d-block"/>
          <Index />
        </div>
      </div>
    </div>
  )
}

export default App;
