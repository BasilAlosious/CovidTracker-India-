import  React,{useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import{fetchStateData} from '../../api'

 const CountryPicker = ({handleStatesChange}) => {
    const [fetchedCountries, setFetchedCountries]= useState([])

    useEffect(() => {
       const fetchAPI = async () => {
           setFetchedCountries( await fetchStateData())
       }
       fetchAPI()
    },[setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleStatesChange(e.target.value)}>
        <option value="">States</option>
        {fetchedCountries.map((state,i)=> 
            <option key={i} value={state.stateName}>{state.stateName}</option> 
            )}
        </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker