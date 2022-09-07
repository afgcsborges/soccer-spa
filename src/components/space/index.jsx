import 'antd/lib/space/style/index.css'
import 'antd/lib/style/index.css'

import AntdSpace from 'antd/lib/space'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSpace = styled(AntdSpace)`
    gap: 0px !important;

    &&&.ant-space.ant-space-vertical {
        width: 100%;

        &&& > .ant-space-item {
            width: 100%;
        }
    }
`

const Space = ({ className, align, direction, size, children }) => (
    <StyledSpace className={className} align={align} direction={direction} size={size}>
        {children}
    </StyledSpace>
)

Space.defaultProps = {
    align: 'start',
    direction: 'horizontal',
    size: 'middle'
}

Space.propTypes = {
    /** Align items */
    align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),
    /** Used to display whatever you wanna include between the opening and closing tags */
    children: PropTypes.node,
    /**  Class name attribute */
    className: PropTypes.string,
    /** The space direction */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    /**	The space size */
    size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'middle', 'large']), PropTypes.number])
}

export default Space
