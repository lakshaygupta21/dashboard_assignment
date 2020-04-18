import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import './nav.css' 
class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href=""><FontAwesomeIcon icon ={faTachometerAlt}/>Sample Dashboard</a>
       </nav>
        );
    }
}
export default Navbar;