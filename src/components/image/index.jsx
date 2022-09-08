import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from 'lodash'

const Image = ({ src, width }) => (
    <img
        style={{ float: 'left', marginBottom: '10px', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
        width={width}
        src={
            isEmpty(src)
                ? 'https://media.istockphoto.com/vectors/image-unavailable-icon-vector-id1206575314?k=20&m=1206575314&s=170667a&w=0&h=ioRmz6_fwuW0bETWDp9JZIZdv-YayKXTdtGmjgB5pnI='
                : src
        }
    />
)
Image.defaultProps = {
    width: 150
}

Image.propTypes = {
    /** Image source url */
    src: PropTypes.string,
    /** Image source url */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Image
