import axios from 'axios'
const proxyurl = "https://cors-anywhere.herokuapp.com/"
const url = 'https://covid-19india-api.herokuapp.com/all'
export const fetchData = async () =>{
    try{
        const { data }= await axios.get(proxyurl + url)

        return {
            active:data[0].active_cases,
            active_rate:data[0].active_rate,
            confirmed : data[0].confirmed_cases,
            death: data[0].death_cases,
            death_rate: data[0].death_rate,
            recovered:data[0].recovered_cases,
            recovered_rate:data[0].recovered_rate,
            lastUpdate:data[0].last_updated,

        }
        
    }
    catch(error){
        console.log(error)
    }
}
const stateUrl = 'https://covid-19india-api.herokuapp.com/v2.0/state_data'
const stateproxyurl = "https://cors-anywhere.herokuapp.com/"

export const fetchStateData = async (stateselect) =>{
    try{
        const { data:{1:state_data}}= await axios.get(stateproxyurl + stateUrl)

        if(stateselect) {
            /*return state_data.state_data */
            const modifiedData = state_data.state_data.map((states) =>{
                
                return {
                stateName: states.state,
                active:states.active,
                active_rate:states.active_rate,
                confirmed : states.confirmed,
                death: states.deaths,
                death_rate: states.death_rate,
                recovered:states.recovered,
                recovered_rate:states.recovered_rate
            }        
             })
             let finalState = {}
              Object.keys(modifiedData).forEach((keys) =>{
                  if(stateselect === modifiedData[keys].stateName){
                       finalState = modifiedData[keys]                    
                   } 
               })
                return finalState
        }
       else {
           const onlystateName = state_data.state_data.map((states) =>{
               return {
                stateName: states.state
               }
           })
           return onlystateName
       }
        
    }
    catch(error){

    }
}

const proxyurlNews = "https://cors-anywhere.herokuapp.com/"
const Newsurl = 'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a0731f1a85fd41d6914db5c52c1f08d1'

export const fetchNewsData = async () =>{
    try{
        const { data }= await axios.get(proxyurlNews+ Newsurl)

        return {
            articles:data.articles
        }
        
    }
    catch(error){
        console.log(error)
    }
}