import  React,{useState, useEffect} from 'react';
import {fetchData} from '../../api'
import{Bar} from 'react-chartjs-2'
import styles from './Charts.module.css'

 const Charts = ({data:{confirmed,death,active,recovered},state}) => {
     const [countryData, setCountryData] = useState([])

     useEffect(() => {
         const fetchAPI = async () => {
             setCountryData(await fetchData())
         }
         fetchAPI()
     },[])

     const countryBarChart = (
         countryData.confirmed
        ?( <Bar 
        data={{
            labels:['Confirmed','Active','Recovered','Deaths'],
            datasets:[{
                label:'people',
                backgroundColor:[
                    'rgba(70, 24, 196, 0.5)',
                    'rgba(241, 122, 10, 0.5)',
                    'rgba(30, 231, 12, 0.5)',
                    ' rgba(255, 0, 0, 0.5)'
                ],
                data:[countryData.confirmed,countryData.active,countryData.recovered,countryData.death]
            }]
         }}
         options={{
             legend: {display:false},
             title:{display:true,text:'Current state '}
         }}
        />):null 
     ) 
     const stateBarChart = (
         active
         ?(
             <Bar
             data={{

                labels:['Confirmed','Active','Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:[
                        'rgba(70, 24, 196, 0.5)',
                        'rgba(241, 122, 10, 0.5)',
                        'rgba(30, 231, 12, 0.5)',
                        ' rgba(255, 0, 0, 0.5)',
                    ],
                    data:[confirmed,active,recovered,death]
                }]
             }}
             options = {{
                 legend:{display:false},
                 title:{display:true, text:'Current State '}
             }}
             
             
             />
            ):null
     )
    return (
        <div className ={styles.container}>
            {state ? stateBarChart :countryBarChart}
        </div>
    )
}
export default Charts