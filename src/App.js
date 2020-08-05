import React,{Component} from 'react';
import styles from'./App.module.css';
 import{Cards,Charts,CountryPicker} from './components'
 import {fetchData,fetchStateData } from './api'
 import Covidlogo from './images/covidlogo.png'
 class App extends Component {
     state = {
         data:{},
        state:''
     }
     /* to make lifecycle components async add async before it */
     async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
     }

     handleStatesChange = async(states) =>{
        if(states){
         const fetchedState = await fetchStateData(states)
         console.log(states)
       console.log(fetchedState)
           this.setState({data:fetchedState, state:states})
        }   
        else {
            const fetchedData = await fetchData();
            this.setState({data:fetchedData})
        }
     }
     render() {
         const {data,state}= this.state
         return (
             <div className={styles.container}>
                <img className={styles.image} src={Covidlogo} alt="COVID-19"/>
                 <Cards data={data}/>
                 <CountryPicker handleStatesChange={this.handleStatesChange}/>
                 <Charts data={data} state={state}/>
             </div>
         )
     }
 }
 export default App