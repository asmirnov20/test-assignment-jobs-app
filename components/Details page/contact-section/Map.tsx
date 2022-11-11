import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { MapOptions } from 'google-map-react'
import { useCallback, useRef } from 'react'
import Spinner from '../../Spinner'
import { customTheme } from './mapTheme'

interface Props {
	job: Job
}

const Map = ({ job }: Props) => {
	const mapRef = useRef(null)

	const onLoad = useCallback((map: any) => {
		mapRef.current = map
	}, [])

	const onUnmount = useCallback((map: google.maps.Map) => {
		mapRef.current = null
	}, [])

	const { isLoaded } = useLoadScript({
		id: 'google-map',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
	})

	const { location } = job

	const loc = {
		lat: location.lat,
		lng: location.long,
	}

	if (!isLoaded)
		return (
			<div className='relative'>
				<Spinner />
			</div>
		)

	const customOptions: MapOptions = {
		zoomControl: false,
		clickableIcons: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		draggable: false,
		fullscreenControl: false,
		keyboardShortcuts: false,
		styles: customTheme,
	}

	return (
		<div className='h-full w-full '>
			<GoogleMap
				center={loc}
				zoom={12}
				mapContainerClassName='h-full w-full '
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
		</div>
	)
}

export default Map
