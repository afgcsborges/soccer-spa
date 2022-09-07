import AntdTable from 'antd/lib/table'
import styled from 'styled-components'

export const StyledTable = styled(AntdTable)`
    &&& {
        .ant-table-thead {
            line-height: 1.4;
            th {
                background: #e2e2e2;
                border-bottom: unset;
            }
        }

        .ant-table-cell-fix-left,
        .ant-table-cell-fix-right {
            background-color: #e2e2e2 !important;
        }

        .ant-table-header > table > thead > tr {
            th.ant-table-cell {
                height: 24px;
            }
            th.ant-table-cell.ant-table-column-has-sorters,
            th.ant-table-cell:not(:first-child) {
                padding: 0px 8px !important;
            }
            th.ant-table-cell:first-child {
                padding: 1px 8px !important;
            }

            .ant-table-column-sorters {
                height: 16px;
            }

            .ant-table-filter-column-title {
                padding: 0px !important;
            }

            .ant-table-filter-column {
                margin: auto !important;
            }
        }

        .ant-table-tbody {
            height: auto;

            .ant-table-expanded-row .ant-table-expanded-row-level-1 {
                display: none;
            }

            .ant-table-row {
                &.ant-table-row-level-1,
                &.ant-table-row-level-2,
                &.ant-table-row-level-3,
                &.ant-table-row-level-4 {
                    background-color: #f4f4f4;
                    .ant-table-cell {
                        border-color: #f4f4f4;
                    }
                }
                .ant-table-cell {
                    border-color: #f4f4f4;
                    border-bottom: 1px solid #f4f4f4;
                    .ant-table-row-expand-icon:hover,
                    .ant-table-row-expand-icon:focus {
                        color: #f69127;
                    }
                }

                :hover .ant-table-cell {
                    background-color: #f4f4f4;
                }
            }

            .ant-table-expanded-row {
                &.ant-table-expanded-row-level-1,
                &.ant-table-expanded-row-level-2,
                &.ant-table-expanded-row-level-3,
                &.ant-table-expanded-row-level-4 {
                    .ant-table-cell {
                        background-color: #f4f4f4;
                    }
                }
            }

            .ant-table-column-sort {
                background: #ffffff;
            }

            tr.ant-table-row-selected > td {
                background: transparent;
            }

            tr > td {
                padding: 8px;
            }

            tr.ant-table-expanded-row > td {
                padding: 0px;
            }

            tr > td.ant-table-cell-row-hover {
                background: transparent;
            }
        }

        /** Sorter */
        th.ant-table-column-has-sorters:hover {
            background: #f4f4f4;
        }

        .ant-table-column-sorter-up.active,
        .ant-table-column-sorter-down.active {
            color: #f69127;
        }

        .ant-table-column-sorters {
            padding: 0;
        }
    }
`
