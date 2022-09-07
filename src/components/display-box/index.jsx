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
            <Text level={1} label={label} weight="medium" />
        </StyledTitle>
        <StyledText>
            <Text level={1} label={value} weight="bold" />
        </StyledText>
    </Space>
)

DisplayBox.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default DisplayBox
