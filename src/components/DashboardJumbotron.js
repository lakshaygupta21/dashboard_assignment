import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine} from '@fortawesome/free-solid-svg-icons'
class DashboardJumbotron extends Component {
render(){
    return(
    <div>
    <div class="jumbotron jumbotron-fluid bg-secondary ">
  <div class="container">
    <h1 class="display-4">Welcome to your Dashboard <FontAwesomeIcon icon ={faChartLine}/></h1>
    <p class="lead">Monitor all your data at one place</p>
  </div>
</div>
    </div>

    );
}
}
export default DashboardJumbotron;