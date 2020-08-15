import React,{Component} from 'react';
import styles from'./App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import{Cards,Charts,CountryPicker} from './components'
 import {fetchData,fetchStateData,fetchNewsData } from './api'
 import News from './components/News/News'
 import Covidlogo from './images/covidlogo.png'
 class App extends Component {
     state = {
         data:{},
        state:'',
        news:{}
     }
     /* to make lifecycle components async add async before it */
     async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
        const NewsData = await fetchNewsData()
         this.setState({news: NewsData})
         console.log(this.state.news)
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
         const {data,state,news}= this.state
         return (
             <Router>
             <Switch>
             <div className={styles.container}>
             <img className={styles.image} src={Covidlogo} alt="COVID-19"/>
             <Route exact path="/">
             <Cards data={data}/>
             <CountryPicker handleStatesChange={this.handleStatesChange}/>
             <Charts data={data} state={state}/>
             </Route>
             <Route path="/news">
             {
                /* news.map(({news,id}) => (
                    <News key={id} headlines={news.headlines} headlines_summary={news.headlines_summary}/>
                 )) */
             }
             </Route>
             </div>
             </Switch>
             </Router>
         )
     }
 }
 export default App