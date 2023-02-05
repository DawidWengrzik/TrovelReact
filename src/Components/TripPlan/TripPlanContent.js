import React, {useState, useRef} from 'react'
import "./tripPlan.css"

import { GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import CostTable from './CostTable/CostTable'

const TripPlanContent = ({ isMapLoaded }) => {

    const [center, setCenter]= useState({lat: 16, lng: 8})
    const [direction, setDirection] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [mapWaypoints, setMapWaypoints] = useState([{
        location: {lat: 16, lng: 8},
        stopover: true,
    }])


    const originRef = useRef()
    const waypointRef = useRef()
    const destinationRef = useRef()

    const calcRoute = async() => {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return
        }

        // eslint-disable-next-line no-undef
        const directionService = new google.maps.DirectionsService();
        
        const result = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            waypoints: [],
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDirection(result)
        setDistance(result.routes[0].legs[0].distance.text)
        setDuration(result.routes[0].legs[0].duration .text)
    }

    const clearRoute = () => {
        setDirection(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destinationRef.current.value = ''
    }
  return (
    <div className='trip-plan__content'>
        <ul className='pin__list'>
            <li>
                <Autocomplete>
                    <input className='locationInput' type="text" ref={originRef}></input>
                </Autocomplete>
                <button className='pin__list-button'>
                    <span>+</span>
                </button>
            </li>
            <li>
                <Autocomplete>
                    <input className='locationInput' type="text" ref={destinationRef}></input>
                </Autocomplete>
                <button className='pin__list-button'>
                    <span>+</span>
                </button>
            </li>
            <li>
                <Autocomplete>
                    <input className='locationInput' type="text" ref={destinationRef}></input>
                </Autocomplete>
                <button className='pin__list-button'>
                    <span>+</span>
                </button>
            </li>
        </ul>
        <button onClick={calcRoute}>Calculate</button>
        
        <div className='trip__wrapper'>
        {isMapLoaded ? 
            <GoogleMap 
            center={center} 
            zoom={3}
            mapContainerStyle={{width: '100%', height:'100%', borderRadius: '15px'}}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
            }}>
                <Marker position={center}></Marker>
                { direction && <DirectionsRenderer directions={direction}/>}
            </GoogleMap> :<div>Google</div>}
        </div>
        <label>Trasa:</label>
        <span>{distance}</span>
        <span>{duration}</span>
        <CostTable></CostTable>
    </div>    
  )
}

export default TripPlanContent