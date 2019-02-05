import PropTypes from 'prop-types'
import {mapProps} from 'recompose'
import BlogPost from '.'

const expand = (prop = 'title') => slug => ({url: `#${slug}`, [prop]: slug})

const enhance = mapProps(({entry, widgetFor}) => {
	// eslint-disable-next-line no-unused-vars
	const {body, ...data} = entry.getIn(['data']).toJS()
	return {
		...data,
		isPreview: true,
		content: widgetFor('body'),
		siteTitle: 'CMS',
		authors: (data.authors || []).map(expand('name')),
		editorial: expand('title')(data.editorial),
	}
})

const Preview = enhance(BlogPost)

Preview.propTypes = {
	entry: PropTypes.shape({getIn: PropTypes.func}),
	widgetFor: PropTypes.func,
}

export default Preview
