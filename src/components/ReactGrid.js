import React,{Component} from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css";
import apidata from './apidata';
class ReactGrid extends Component {
render(){
 //Api.getData();
   // this.getFunction()//[{FirstName:'Lakshay',StartTime:'123',Phoneno:'98745',ReservationId: '123'}]
    
     const columns = [{
        Header: 'First Name',
        accessor: 'FirstName'
      },{
        Header: 'Start Time',
        accessor: 'StartTime'
      },
      {
        Header: 'Phone Number',
        accessor: 'Phoneno'
      },
      {
        Header: 'Reservation ID',
        accessor: 'ReservationId'
      }]
      //FisrtName, Start Time( In AM/PM Format), Phone Number and Reservation Id
    return(
        <div>
            <ReactTable
            data={apidata.data}
            columns={columns}
            defaultPageSize = {20}
            pageSizeOptions = {[10,20,50,100]}/>
        </div>
    )
}
}
export default ReactGrid;