import React from 'react'
import styled from 'styled-components'
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl'
import {colors} from '../../constants'

const Placeholder = styled.div`
	background: ${colors.base};
`
const RenderPlaceholder = ({className}) => <Placeholder className={className}/>
const factory = (...args) => (typeof ReactMapboxGl === 'function'
	? ReactMapboxGl(...args)
	: RenderPlaceholder
)

const UnstyledMapBase = factory({
	accessToken: 'pk.eyJ1Ijoidml0b3JkaW5vIiwiYSI6ImNqbTdmM2o5czB2YWIzcW4zdjE3M2ozZzcifQ.HWDJY3_QSQ6ytC0hGQ_Fcg',
	scrollZoom: false,
})

const mapStyle = 'mapbox://styles/mapbox/dark-v9'

const MapBase = styled(UnstyledMapBase)`
	.mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib{
		display: none;
	}
`

const Map = ({coordinates, zoom = [12, 16], ...props}) => (
	<MapBase center={coordinates} zoom={zoom} {...props} style={mapStyle}>
		<Layer
			type='symbol'
			id='marker'
			layout={{'icon-image': 'circle-stroked-15'}}
		>
			<Feature coordinates={coordinates}/>
		</Layer>
	</MapBase>
)

export default Map
