import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "./Map.scss";
import creativeImg from '../assets/images/3d-view-puzzle-pieces.png';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 37.49591954911967,
  lng: 126.95994866353232
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        {/* 여기에 지도를 커스터마이즈하는 코드를 추가할 수 있습니다. */}
        <Marker 
          position={center} 
          // icon={{
          //   url:creativeImg , // 마커로 사용할 이미지의 경로
          //   scaledSize: new window.google.maps.Size(50, 50), // 마커 이미지의 크기 조정
          // }}
        /> 
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
