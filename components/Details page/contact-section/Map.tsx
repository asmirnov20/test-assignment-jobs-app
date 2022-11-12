import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import customOptions from './mapOptions'
import { useCallback, useRef } from 'react'
import Spinner from '../../Spinner'

interface Props {
	location: {
		lat: number
		long: number
	}
}

const Map = ({ location }: Props) => {
	const mapRef = useRef(null)
	const { lat, long: lng } = location

	const loc = {
		lat,
		lng,
	}

	const onLoad = useCallback((map: any) => {
		mapRef.current = map
	}, [])

	const onUnmount = useCallback(() => {
		mapRef.current = null
	}, [])

	const { isLoaded } = useLoadScript({
		id: 'google-map',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
	})

	if (!isLoaded)
		return (
			<div className='relative'>
				<Spinner />
			</div>
		)

	return (
		<>
			<GoogleMap
				center={loc}
				zoom={12}
				mapContainerClassName='mapContainer'
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={customOptions}
			>
				<MarkerF
					position={loc}
					icon={{ url: '/Location.svg' }}
					clickable={false}
				/>
			</GoogleMap>
		</>
	)
}

export default Map
