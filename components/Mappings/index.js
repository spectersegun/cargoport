import React, { useMemo, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import Checks from '../Vectors/Checks';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

export default function Mappings({ onOk }) {
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //   });

  //   const onFinish = values => {
  //     console.log('Success:', values);
  //     onOk();s
  //   };

  const mapCenter = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  const [coordinates, setCoordinates] = useState({ lat: 6.42, lng: 3.39 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div className="mapping-wrapper">
      <GoogleMapReact
        style={{ width: '100%', height: '500' }}
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[40, 40, 40, 40]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
}
