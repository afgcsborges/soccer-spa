import 'antd/lib/style/index.css'
import 'antd/lib/select/style/index.css'

import React, { useCallback } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import AntdSelect from 'antd/lib/select'
import PropTypes from 'prop-types'
import Text from '../text'
import debounce from 'lodash.debounce'

const HIGH_PADDING = 24

const getBackgroundColor = category => {
    if (category === 'table') return '#F4F4F4'
    if (category === 'simple') return 'none'
    return '#FFFFFF'
}

const getHeight = size => {
    if (size === 'large') return '40px'
    if (size === 'middle') return '32px'
    if (size === 'small') return '28px'
    return '32px'
}

/* istanbul ignore next */
const StyledSelect = styled(AntdSelect)`
    width: 80%;
    height: ${props => getHeight(props.size)};
    &&&.ant-select {
        min-width: 50px;
        outline: none;
        border: none;
        &&& .ant-select-clear {
            span {
                background: #ffffff;
            }
            svg {
                color: #4c4c4c;
            }
        }
    }
    &&&.ant-select * {
        outline: none;
        background: ${props => (props.category === 'simple' ? 'none' : '')};
    }
    &&&.ant-select .ant-select-arrow {
        color: #4c4c4c !important;
    }
    &&&.ant-select-focused .ant-select-selector {
        box-shadow: ${props => (props.category === 'simple' ? 'none' : `0 0 0 0.5px #91D5FF`)};
    }
    &&&.ant-select-disabled .ant-select-selector {
        background-color: #f4f4f4;
        border: none;
        border-bottom: ${props => (props.category === 'simple' ? `1px solid #8B8B8B` : 'none')};
        box-shadow: ${props =>
            props.category === 'simple' || props.category === 'table' ? 'none' : `0 0 0 0.5px #8B8B8B`};
    }
    &&&.ant-select:not(.ant-select-disabled) .ant-select-selector {
        background: ${props => getBackgroundColor(props.category)};
        border: none;
        border-bottom: ${props => (props.category === 'simple' ? `1px solid #8B8B8B` : 'none')};
        box-shadow: ${props =>
            props.category === 'simple' || props.category === 'table' ? 'none' : `0 0 0 0.5px #8B8B8B`};
    }
    &&&.ant-select:not(.ant-select-disabled):hover .ant-select-selector,
    &&&.ant-select:not(.ant-select-disabled).ant-select-focused .ant-select-selector {
        box-shadow: ${props => (props.category === 'simple' ? 'none' : `0 0 0 0.5px #91D5FF`)};
        border-color: ${props => (props.category === 'simple' ? '#8B8B8B' : 'transparent')};
    }
    &&&.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background-color: #f69127;
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-search {
        margin-right: ${HIGH_PADDING}px;
    }
    &&&.ant-select .ant-select-selection-search-input {
        padding: 0;
        color: ${props => (props.disabled ? '#8B8B8B' : '#2E2E2E')};
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-item {
        font-size: ${props => (props.size === 'small' ? '12px' : '')};
        font-weight: ${props => (props.strong ? 'bold' : 'unset')};
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-placeholder {
        color: #adadad;
        font-style: italic;
        font-size: ${props => (props.size === 'large' ? '12px' : '10px')};
    }
    &&&.ant-select .ant-select-selector .ant-select-selection-item {
        color: #2e2e2e;
        font-size: ${props => (props.size === 'large' ? '12px' : '10px')};
    }
    &&& .rc-virtual-list-holder-inner > .ant-select-item-option-content {
        color: #2e2e2e;
    }
`
export const SelectDropDownStyle = `
&&& .ant-select-dropdown {
    background-color: #E2E2E2 !important;
}
&&& .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #F4F4F4 !important;
}
&&& .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: #F4F4F4 !important;
}
&&& .ant-select-item-option:not(.ant-select-item-option-disabled) {
    color: #4C4C4C !important;
}
&&& .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 500 !important;
    color: #000000 !important;
    background-color: #BFBFBF !important;
}
`
/* istanbul ignore next */
const StyledDropdown = createGlobalStyle`
    ${SelectDropDownStyle}
`
const DEBOUNCE_TIME = 500

const Select = ({
    dataTest,
    allowClear,
    options,
    optionFilterProp,
    size,
    placeholder,
    disabled,
    value,
    loading,
    onChange,
    onSelect,
    onSearch,
    defaultValue,
    mode,
    showArrow,
    showSearch,
    category,
    readOnly,
    strong
}) => {
    /* istanbul ignore next */
    const delayedOnSearch = onSearch
        ? useCallback(
              debounce(val => onSearch(val), DEBOUNCE_TIME),
              []
          )
        : null

    return readOnly ? (
        <Text
            dataTest={dataTest ? `${dataTest}:search` : ''}
            label={
                options.find(option => option.key === value || option.key === defaultValue)
                    ? options.find(option => option.key === value || option.key === defaultValue).label
                    : ''
            }
            level={2}
            strong
        />
    ) : (
        <React.Fragment>
            <StyledDropdown />
            <StyledSelect
                data-test={dataTest ? `${dataTest}:select` : ''}
                optionFilterProp={optionFilterProp}
                size={size}
                placeholder={placeholder}
                allowClear={mode === 'multiple' ? false : allowClear}
                loading={loading}
                disabled={disabled}
                value={value}
                strong={strong}
                defaultValue={defaultValue}
                onChange={onChange}
                onSearch={delayedOnSearch}
                onSelect={onSelect}
                mode={mode}
                filterOption={!onSearch}
                showArrow={showArrow}
                category={category}
                showSearch={showSearch}
            >
                {options.map(({ label, key }, index) => (
                    <StyledSelect.Option
                        strong={strong}
                        data-test={dataTest ? `${dataTest}:select-item_${index}` : ''}
                        key={key}
                        label={label}
                    >
                        {label}
                    </StyledSelect.Option>
                ))}
            </StyledSelect>
        </React.Fragment>
    )
}

Select.defaultProps = {
    allowClear: true,
    category: 'regular',
    disabled: false,
    notFoundText: '',
    optionFilterProp: 'label',
    options: [],
    placeholder: '',
    renderNotFound: true,
    showArrow: true,
    showSearch: false,
    size: 'large'
}

Select.propTypes = {
    /** Show clear button */
    allowClear: PropTypes.bool,
    /**
     * Defines the looks of Select. "table" is optimal to use in Table columns while "simple" defines only the bottom border
     */
    category: PropTypes.oneOf(['regular', 'table', 'simple']),
    /**
     * The name of the Test Tag is defined by the dev team (Dev + QA) so that, throughout development,
     * everyone knows that a particular element corresponds to a particular Test Tag. A test tag must be unique.
     * This definition of the name must follow the nomenclature rule:
     * <b>Widget-name_element-context</b>
     */
    dataTest: PropTypes.string,
    /** Initial selected option */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    /** Whether disabled select */
    disabled: PropTypes.bool,
    /** Indicate loading state */
    loading: PropTypes.bool,
    /**
     *Set mode of Select
     */
    mode: PropTypes.oneOf(['multiple', 'tags']),
    /** Customize description when not found */
    notFoundText: PropTypes.string,
    /** Called when select an option or input value change */
    onChange: PropTypes.func,
    /** Callback function that is fired when input changed */
    onSearch: PropTypes.func,
    /** Called when a option is selected, the params are option's value (or key) and option instance */
    onSelect: PropTypes.func,
    /** Which prop value of option will be used for filter if filterOption is true */
    optionFilterProp: PropTypes.string,
    /** {Label: PropTypes.string, Key: String} */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            label: PropTypes.string
        })
    ),
    /** Placeholder of select */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** If true component will render as a label */
    readOnly: PropTypes.bool,
    /** Whether to show search not found with the Empty component */
    renderNotFound: PropTypes.bool,
    /** Whether to show the drop-down arrow */
    showArrow: PropTypes.bool,
    /** Whether show search input in single mode */
    showSearch: PropTypes.bool,
    /** Size of Select input */
    size: PropTypes.oneOf(['large', 'middle', 'small']),
    strong: PropTypes.bool,
    /** Current selected option */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ])
}

export default Select
