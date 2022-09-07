import PropTypes from 'prop-types'
import React from 'react'
import Space from 'components/space'
import Text from 'components/text'
import styled from 'styled-components'

const StyledText = styled.div`
    white-space: pre-line;
    inline-size: max-content;
    width: 150px;
    text-align: left;
`

const StyledTitle = styled.div`
    min-width: 100px;
    text-align: start;
    inline-size: max-content;
`

const DisplayBox = ({ label, value }) => (
    <Space size="large">
        <StyledTitle>
            <Text level={1} label={label} />
        </StyledTitle>
        <StyledText>
            <Text level={1} label={value} strong />
        </StyledText>
    </Space>
)

DisplayBox.propTypes = {
    /** Label to display */
    label: PropTypes.string,
    /** Value to display */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default DisplayBox
