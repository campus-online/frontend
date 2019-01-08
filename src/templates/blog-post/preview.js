import PropTypes from 'prop-types'
import {mapProps} from 'recompose'
import BlogPost from '.'

const expand = (data, prop = 'title') =>
	((data || {}).slug || null) && {
		url: data.slug,
		[prop]: data.title,
	}

const enhance = mapProps(({entry, widgetFor}) => {
	// eslint-disable-next-line no-unused-vars
	const {body, cover, ...data} = entry.getIn(['data']).toJS()
	return {
		...data,
		content: widgetFor('body'),
		siteTitle: 'CMS',
		cover: (cover || null) && {image: {sizes: {src: cover}}},
		author: expand(data.author, 'name'),
		editorial: expand(data.editorial),
	}
})

const Preview = enhance(BlogPost)

Preview.propTypes = {
	entry: PropTypes.shape({getIn: PropTypes.func}),
	widgetFor: PropTypes.func,
}

export default Preview
