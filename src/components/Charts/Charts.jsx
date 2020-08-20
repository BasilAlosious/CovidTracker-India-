import  React from 'react';
import{Bar} from 'react-chartjs-2'
import Progress from '../Progress Bar/Progress'
import styles from './Charts.module.css'
 const Charts = ({data:{confirmed,death,active,recovered},state}) => {
    
     const stateBarChart = (
         active
         ?(
             <Bar
             data={{

                labels:['Confirmed','Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:[
                         'rgba(241, 226, 7, 0.5)',
                        'rgba(30, 231, 12, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data:[confirmed,recovered,death]
                }]
             }}
             options = {{
                 legend:{display:false, },
                 title:{display:true, text:`Current State In ${!state ? 'India': state } `}
             }}
             
             
             />
            ):<Progress/>
     )
    return (
        <div className ={styles.container}>
        { stateBarChart }
        </div>
    )
}
export default Charts