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
            lastUpdate:data[0].last_updated,
            

        }
        
    }
    catch(error){

    }
}
const stateUrl = 'https://covid-19india-api.herokuapp.com/v2.0/state_data'
const stateproxyurl = "https://cors-anywhere.herokuapp.com/"

export const fetchStateData = async () =>{
    try{
        const { data:{1:state_data}}= await axios.get(stateproxyurl + stateUrl)

        /*return state_data.state_data */
       const modifiedData = state_data.state_data.map((states) =>{
          return {
              stateName:states.state,
          }

       }) 
            
       return modifiedData
        
        
    }
    catch(error){

    }
}