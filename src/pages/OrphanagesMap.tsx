import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage-maps.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Roraima</strong>
          <span>Boa Vista</span>
        </footer>
      </aside>

      <MapContainer 
        center={[2.8155582,-60.6865821]} 
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
      </MapContainer>  

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;