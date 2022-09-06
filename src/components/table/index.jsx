/* eslint-disable max-lines-per-function */
/* eslint-disable max-params */

import 'antd/lib/button/style/index.css'
import 'antd/lib/checkbox/style/index.css'
import 'antd/lib/dropdown/style/index.css'
import 'antd/lib/empty/style/index.css'
import 'antd/lib/table/style/index.css'
import 'antd/lib/spin/style/index.css'
import 'antd/lib/radio/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/tooltip/style/index.css'
import 'antd/lib/style/index.css'

import { GlobalStyledTable, StyledEmpty, StyledTable, StyledTableContainer } from './styles'

import PropTypes from 'prop-types'
import React from 'react'

const Table = ({
    columns,
    dataSource,
    emptyText,
    loading,
    justifiedLeftRow,
    onChange,
    rowKey,
    showHeader,
    smallFrame,
    onRow,
    transparent,
    footer,
    header
}) => (
    <StyledTableContainer>
        <GlobalStyledTable />
        <StyledTable
            pagination={false}
            columns={columns}
            dataSource={dataSource}
            justifiedLeftRow={justifiedLeftRow}
            loading={loading}
            locale={{
                emptyText: <StyledEmpty>{loading ? null : emptyText}</StyledEmpty>
            }}
            onChange={onChange}
            rowKey={rowKey}
            showHeader={showHeader}
            smallFrame={smallFrame}
            onRow={onRow}
            transparent={transparent}
            footer={footer}
            title={header}
        />
    </StyledTableContainer>
)
Table.defaultProps = {
    columns: [],
    emptyText: null,
    scroll: null,
    showHeader: true
}
export const TableProps = {
    /** Columns of table (https://ant.design/components/table/#Column) */
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataIndex: PropTypes.string,
            /** Function to be triggered when filter confirm button is clicked */
            onFilterConfirm: PropTypes.func,
            /** Function to be triggered when filter reset button is clicked */
            onFilterReset: PropTypes.func,
            searcheable: PropTypes.bool,
            sortDirections: PropTypes.arrayOf(PropTypes.string),
            sorter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
            title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        })
    ),
    /** Table datasource array */
    dataSource: PropTypes.arrayOf(PropTypes.object),
    /**
     * The name of the Test Tag is defined by the dev team (Dev + QA) so that, throughout development,
     * everyone knows that a particular element corresponds to a particular Test Tag. A test tag must be unique.
     * This definition of the name must follow the nomenclature rule:
     * <b>Widget-name_element-context</b>
     */
    dataTest: PropTypes.string,
    /** Customize empty text */
    emptyText: PropTypes.string,
    footer: PropTypes.func,
    header: PropTypes.func,
    /** Weather the row first item should be justified to the left (matching the others first row items justification) or not */
    justifiedLeftRow: PropTypes.bool,
    /** Controls table loading state */
    loading: PropTypes.bool,
    /**  Method that receives (pagination, filters, sorter, { currentDataSource }) to enable remote data handling */
    onChange: PropTypes.func,
    /** Set props on per row https://ant.design/components/table/#onRow-usage */
    onRow: PropTypes.func,
    /** Datasource unique item key */
    rowKey: PropTypes.string,
    /** Enables row selection (https://ant.design/components/table/#rowSelection) */
    rowSelection: PropTypes.shape({
        isCheckboxVisible: PropTypes.func,
        onRowSelect: PropTypes.func,
        selectedRowKeys: PropTypes.array
    }),
    /** Whether the table can be scrollable (https://ant.design/components/table/#scroll) */
    scroll: PropTypes.shape({
        scrollToFirstRowOnChange: PropTypes.bool,
        x: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        y: PropTypes.number
    }),
    /** Whether the table should show header or not */
    showHeader: PropTypes.bool,
    /** Controls background color for optimized 1280 px */
    smallFrame: PropTypes.bool,
    /** Wheather the table is transparent */
    transparent: PropTypes.bool
}
Table.propTypes = TableProps
export default Table
