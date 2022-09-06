import 'antd/lib/button/style/index.css'
import 'antd/lib/style/index.css'

import AntdButton from 'antd/lib/button'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

/* istanbul ignore next */
const StyledButton = styled(AntdButton)`
    &&& {
        height: 80%;
        font-size: 14px;
        max-width: 80%;
        display: inline-flex;
        justify-content: right;
        align-items: right;
        padding: 8px;
        float: right;
        margin-bottom: 10px;
        

        &:not([disabled]) {
            background-color: 'transparent';
            border-color: '#508BC3';
            color: '#508BC3';

            > span.anticon {
                color: '#508BC3';
            }

            &:hover {
                background-color: '##6083A5';
                color: '#4C4C4C';

                > span.anticon {
                    color: '#4C4C4C';
                }
            }

            &:active {
                background-color: '#1890FF';
                color: '#1890FF';
                > span.anticon {
                    color: '#1890FF';
                }
            }
        }

        > span.anticon {
            width: 15px;
            line-height: 0;
            color: '#4C4C4C';
        }

        > span:not(.anticon) {
            max-width: '100%';
            overflow: hidden;
            vertical-align: middle;
        }
    }
`

const Button = ({ label, onClick,  }) => (
    <StyledButton onClick={onClick} >
        {label}
    </StyledButton>
)

Button.defaultProps = {
    iconPosition: 'left',
    label: null,
    onClick: null
}

Button.propTypes = {
    /**
     * Text inside button
     */
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * Set the handler to handle click event
     */
    onClick: PropTypes.func
}

export default Button