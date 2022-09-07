import 'antd/lib/empty/style/index.css'
import 'antd/lib/table/style/index.css'
import 'antd/lib/tooltip/style/index.css'
import 'antd/lib/style/index.css'

import PropTypes from 'prop-types'
import React from 'react'
import { StyledTable } from './styles'
import styled from 'styled-components'

export const StyledEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledTableContainer = styled.div`
    height: 80%;
    width: 80%;
    padding-bottom: 20px;
    padding-top: 4px;

    &&& .ant-table-body {
        background-color: #ffffff;
    }

    &&& .ant-table-cell {
        color: #4c4c4c;
    }

    &&& .ant-select-arrow {
        color: #4c4c4c;
    }

    &&& .ant-select-selector {
        background-color: #ffffff;
        color: #4c4c4c;
    }

    &&& .ant-table-tbody > tr.ant-table-placeholder:hover > td {
        background-color: #e2e2e2;
    }

    &&& .ant-table-thead th.ant-table-column-has-sorters:hover {
        background-color: #e2e2e2;
    }

    &&& .ant-table-thead th.ant-table-column-has-sorters:hover .ant-table-filter-trigger-container {
        background: transparent;
    }
`

const Table = ({ columns, dataSource, emptyText, rowKey, footer, header }) => (
    <StyledTableContainer>
        <StyledTable
            pagination={false}
            columns={columns}
            dataSource={dataSource}
            locale={{
                emptyText: <StyledEmpty>{emptyText}</StyledEmpty>
            }}
            rowKey={rowKey}
            footer={footer}
            title={header}
        />
    </StyledTableContainer>
)

Table.defaultProps = {
    columns: [],
    emptyText: null
}

Table.propTypes = {
    /** Columns of table (https://ant.design/components/table/#Column) */
    columns: PropTypes.array,
    /** Table datasource array */
    dataSource: PropTypes.arrayOf(PropTypes.object),
    /** Customize empty text */
    emptyText: PropTypes.string,
    /** Customize footer */
    footer: PropTypes.func,
    /** Customize header */
    header: PropTypes.func,
    /** Datasource unique item key */
    rowKey: PropTypes.string
}

export default Table
