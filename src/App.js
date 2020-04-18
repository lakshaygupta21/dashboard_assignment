import React,{Component} from 'react'
import ReactGrid from './components/ReactGrid.js';
import DashboardJumbotron from './components/DashboardJumbotron';
import Navbar from './components/Navbar'
class App extends Component {
  render(){
    return(<div className = 'container'>
      <Navbar/>
    <DashboardJumbotron/>
    <ReactGrid/>
</div>)
  }
}
export default App;