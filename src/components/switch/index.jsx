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

const Switch = ({
    dataTest,
    className,
    onChange,
    size,
    disabled,
    checked,
    defaultChecked,
    checkedLabel,
    uncheckedLabel
}) => {
    const handleChange = newValue => {
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <Space align={'center'}>
            {uncheckedLabel ? (
                <Text minWidth={'100px'} label={uncheckedLabel} weight={checked ? 'regular' : 'bold'} />
            ) : null}
            <StyledSwitch
                data-test={dataTest}
                className={className}
                onChange={handleChange}
                size={size}
                disabled={disabled}
                defaultChecked={defaultChecked}
                checked={checked}
            ></StyledSwitch>
            {checkedLabel ? (
                <Text minWidth={'100px'} label={checkedLabel} weight={checked ? 'bold' : 'regular'} />
            ) : null}
        </Space>
    )
}

export const SwitchProps = {
    /**
     * Used to get if the switch is toggled
     */
    checked: PropTypes.bool,
    /**
     * Used to set text at switch right side
     */
    checkedLabel: PropTypes.string,
    /**
     * Class name attribute
     */
    className: PropTypes.string,
    /**
     * The name of the Test Tag is defined by the dev team (Dev + QA) so that, throughout development,
     * everyone knows that a particular element corresponds to a particular Test Tag. A test tag must be unique.
     * This definition of the name must follow the nomenclature rule:
     * <b>Widget-name_element-context</b>
     */
    dataTest: PropTypes.string,
    /**
     * Used to set the switch initial state
     */
    defaultChecked: PropTypes.bool,
    /**
     * The disabled option
     */
    disabled: PropTypes.bool,
    /**
     * OnChange function
     */
    onChange: PropTypes.func,
    /**
     * The switch size
     */
    size: PropTypes.string,
    /**
     * Used to set text at switch left side
     */
    uncheckedLabel: PropTypes.string
}

Switch.propTypes = SwitchProps

export default Switch
