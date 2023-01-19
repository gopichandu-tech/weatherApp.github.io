import React, {useEffect,useState,useRef} from 'react'
import axios from 'axios';
import './WeatherApp.css'

function WeatherApp() {


    const[ city, setCity] = useState(null);
    const[ search, setSearch] = useState("");
    const [idFromButton,setIdFromButton] = useState("");

    const inputRef = useRef(null);
    const [updated,setUpdated] = useState('');

    useEffect(() => {
        const fetchApi = async() =>
        {
           axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${idFromButton}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`).then(res=>{
                setCity(res.data.main)
            })
        }
        fetchApi();
    },[idFromButton])

    const handleClick = () => {
        setIdFromButton(search)
        setUpdated(inputRef.current.value);
        
        
    }
    
  return (
    <div>
        <div className='Container'>
            <div className='sub_Container'>
                <div className='input_Container'><input ref={inputRef} type="search" id="input"  placeholder='city name'  onChange={e=> setSearch(e.target.value)}/> </div>
                <div className='button_Container'><button id="button" onClick={handleClick}>Search</button></div>
                {!city ?  
                (<div className='nodata_sub_Container'><h3><b>No Data Found</b></h3></div>) 
                : (<div className='temp_display_sub_Container'>
                    <div className='display_city'>{updated}</div>
                    <div className='display_temp'>{city.temp} °C</div>
                </div>)}
                
            </div>
            <p></p>

            <div className='footer'><p>@MGopiChandu</p></div> 
            
        </div>
        

        
    </div>
   
    
      
    
  )
}

export default WeatherApp
