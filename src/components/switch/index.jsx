import 'antd/lib/switch/style/index.css'
import 'antd/lib/style/index.css'

import AntdSwitch from 'antd/lib/switch'
import PropTypes from 'prop-types'
import React from 'react'
import Space from 'components/space'
import Text from 'components/text'
import styled from 'styled-components'

const StyledSwitch = styled(AntdSwitch)`
    &&&.ant-switch-checked {
        background-color: #4c4c4c;
    }
`

const Switch = ({ className, onChange, checked, checkedLabel, uncheckedLabel }) => {
    const handleChange = newValue => {
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <Space align={'center'}>
            {uncheckedLabel ? <Text minWidth={'100px'} label={uncheckedLabel} strong={!checked} /> : null}
            <StyledSwitch className={className} onChange={handleChange} checked={checked}></StyledSwitch>
            {checkedLabel ? <Text minWidth={'100px'} label={checkedLabel} strong={checked} /> : null}
        </Space>
    )
}

export const SwitchProps = {
    /** Used to get if the switch is toggled */
    checked: PropTypes.bool,
    /** Used to set text at switch right side */
    checkedLabel: PropTypes.string,
    /** Class name attribute */
    className: PropTypes.string,
    /** OnChange function */
    onChange: PropTypes.func,
    /** Used to set text at switch left side */
    uncheckedLabel: PropTypes.string
}

Switch.propTypes = SwitchProps

export default Switch
