import { MapOptions } from 'google-map-react'
import { customTheme } from './mapTheme'

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

export default customOptions