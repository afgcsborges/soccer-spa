/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from 'lodash'

const Image = ({ src }) => (
    <img
        style={{ float: 'left', marginBottom: '10px' }}
        width={150}
        src={
            isEmpty(src)
                ? 'https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large/is-moderation-mode/true?v=v2&px=999'
                : src
        }
    />
)

Image.propTypes = {
    /**
     * Image source url
     */
    src: PropTypes.string
}

export default Image
