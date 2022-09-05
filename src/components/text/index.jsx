import PropTypes from 'prop-types'
import React from 'react'
import fontFamily from './font'
import styled from 'styled-components'

const LEVEL1 = {
    line: 16,
    size: 14,
    value: 1
}

const LEVEL2 = {
    line: 14,
    size: 12,
    value: 2
}

const LEVEL3 = {
    line: 11,
    size: 10,
    value: 3
}

const getFontSizeByLevel = level => {
    switch (level) {
        case LEVEL1.value:
            return LEVEL1.size
        case LEVEL2.value:
            return LEVEL2.size
        case LEVEL3.value:
            return LEVEL3.size
        default:
            return LEVEL1.size
    }
}

const getLineHeightByLevel = level => {
    switch (level) {
        case LEVEL2.value:
            return LEVEL2.line
        case LEVEL3.value:
            return LEVEL3.line
        default:
            return LEVEL1.line
    }
}

const getColor = (type, color, disabled) => {
    if (disabled) return '#ADADAD'
    else if (type) {
        switch (type) {
            case 'default':
                return '#4C4C4C'
            case 'info':
                return '#6083A5'
            case 'success':
                return '#518F37'
            case 'warning':
                return '#BC8D30'
            case 'danger':
                return '#AC3B44'
            default:
                return '#4C4C4C'
        }
    } else {
        switch (color) {
            case 'distinct':
                return '#2E2E2E'
            case 'highlight':
                return '#000000'
            default:
                return '#4C4C4C'
        }
    }
}

const getFontWeight = (strong, weight) => {
    if (strong) return '700'

    switch (weight) {
        case 'bold':
            return '700'
        case 'medium':
            return '500'
        default:
            return '400'
    }
}

const StyledText = styled.span`
    font-family: ${fontFamily};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
    color: ${({ color, disabled, type }) => getColor(type, color, disabled)};
    font-size: ${({ level }) => getFontSizeByLevel(level)}px;
    line-height: ${({ level }) => getLineHeightByLevel(level)}px;
    font-weight: ${({ strong, weight }) => getFontWeight(strong, weight)};
    max-width: 100%;
    display: inline-block;

    ${({ ellipsis }) =>
        ellipsis
            ? `
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;`
            : null}
`

const Text = ({
    className,
    color,
    dataTest,
    disabled,
    ellipsis,
    label,
    level,
    strong,
    type,
    underline,
    italic,
    weight
}) => (
    <StyledText
        className={className}
        data-test={dataTest ? `${dataTest}:text` : ''}
        color={color}
        disabled={disabled}
        ellipsis={ellipsis}
        level={level}
        strong={strong}
        title={label}
        type={type}
        underline={underline}
        italic={italic}
        weight={weight}
    >
        {underline ? <u>{label}</u> : label}
    </StyledText>
)

Text.defaultProps = {
    color: 'default',
    disabled: false,
    ellipsis: false,
    level: 1,
    strong: false,
    type: null,
    underline: false
}

/* eslint-disable no-magic-numbers */
Text.propTypes = {
    /**
     * Class name attribute
     */
    className: PropTypes.string,
    /**
     * Text color variation
     */
    color: PropTypes.oneOf(['default', 'highlight', 'distinct']),
    /**
     * The name of the Test Tag is defined by the dev team (Dev + QA) so that, throughout development,
     * everyone knows that a particular element corresponds to a particular Test Tag. A test tag must be unique.
     * This definition of the name must follow the nomenclature rule:
     * <b>Widget-name_element-context</b>
     */
    dataTest: PropTypes.string,
    /**
     * Disabled content
     */
    disabled: PropTypes.bool,
    /**
     * Display ellipsis when text overflows
     */
    ellipsis: PropTypes.bool,
    /**
     * Italic style
     */
    italic: PropTypes.bool,
    /**
     * Content
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Set content importance
     */
    level: PropTypes.oneOf([1, 2, 3]),
    /**
     * Bold style
     */
    strong: PropTypes.bool,
    /**
     *	Content type
     */
    type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger']),
    /**
     * Underlined style
     */
    underline: PropTypes.bool,
    /**
     * Font Weight
     */
    weight: PropTypes.oneOf(['bold', 'medium', 'regular'])
}

export default Text
