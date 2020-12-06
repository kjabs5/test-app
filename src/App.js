import React, { Component } from 'react';
import Card from './components/Card';
import series from './service/data';
import './App.css';

class App extends Component {
render(){
    return(
      <>
      <h1 className="heading_style">List of top 5 netflix series in 2020</h1>
      {series.map(series => <Card imgsrc={series.imgscr} title={series.title} sname={series.sname} 
      link={series.link} />)}
     
      
      </>
     );
  
    }
}

export default App;
