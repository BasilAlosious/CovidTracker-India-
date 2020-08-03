import React,{Component} from 'react';
import styles from'./App.module.css';
 import{Cards,Charts,CountryPicker} from './components'
 import {fetchData } from './api'
 class App extends Component {
     state = {
         data:{},
        states:''
     }
     /* to make lifecycle components async add async before it */
     async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
     }

     handleStatesChange = async(states) =>{
         console.log(states)
     }
     render() {
         const {data}= this.state
         return (
             <div className={styles.container}>
                 <Cards data={data}/>
                 <CountryPicker handleStatesChange={this.handleStatesChange}/>
                 <Charts/>
             </div>
         )
     }
 }
 export default App