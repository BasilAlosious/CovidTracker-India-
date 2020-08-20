import React,{Component} from 'react';
import styles from'./App.module.css';
 import{Cards,Charts,CountryPicker } from './components'
 import {fetchData,fetchStateData} from './api'
 import image from './images/covidlogo.jpg';
 import IconButton from '@material-ui/core/IconButton';
 import GitHubIcon from '@material-ui/icons/GitHub';
 class App extends Component {
     state = {
         data:{},
        state:'',
     }
     /* to make lifecycle components async add async before it */
     async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
     }

     handleStatesChange = async(states) =>{
        if(states){
         const fetchedState = await fetchStateData(states)
           this.setState({data:fetchedState, state:states})
        }   
        else {
            const fetchedData = await fetchData();
            this.setState({data:fetchedData})
            this.setState({state:''})
        }
     }
     render() {
         const {data,state}= this.state
        
         return ( 
            <div className={styles.container}>
             <img src={image} alt='loading'/>
             <Cards data={data}/>
             <CountryPicker handleStatesChange={this.handleStatesChange}/>
             <Charts data={data} state={state}/>
             <IconButton onClick={()=> window.open('https://github.com/BasilAlosious')}>
             <GitHubIcon    fontSize="large"/>
             </IconButton>
             </div>
         )
     }
 }
 export default App