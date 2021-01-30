import React,{Component} from 'react'
import mapboxgl from 'mapbox-gl'
import s from './map.module.scss'

class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken="pk.eyJ1IjoiYW5hc3Rhc2l5YXNhZmluYSIsImEiOiJja2pwdDZtaWsyeWlrMnRxbzcyc3p4cnRzIn0.giUdWmqaQ7bWILI6HalYyQ"

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [37.33, 55.83], 
            zoom: 10,
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return( 
        <div className={s.map__wrapper}>
            <div data-testid="s.map" className={s.map} ref={this.mapContainer}/>
            {this.props.children}
        </div>)
    }
}

export default Map;
