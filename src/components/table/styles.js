import styled, { createGlobalStyle } from 'styled-components'

import AntdTable from 'antd/lib/table'

/* istanbul ignore next */
export const StyledTable = styled(AntdTable)`
    &&& {
        .ant-table-thead {
            line-height: 1.4;
            th {
                background: ${props => (props.transparent ? '#FFFFFF' : '#E2E2E2')};
                border-bottom: unset;
            }
        }

        .ant-table-cell-fix-left,
        .ant-table-cell-fix-right {
            background-color: ${props => (props.transparent ? '#FFFFFF' : '#E2E2E2')} !important;
        }

        .ant-table-body {
            border-top: ${props => (props.transparent ? `1px solid #F4F4F4` : 'unset')};
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
                padding: ${props => (props.justifiedLeftRow ? '8px !important' : '1px 8px !important')};
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
            height: ${({ scroll }) => (scroll ? `${scroll.y}px` : 'auto')};

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

                .ant-table-cell:not(:first-child) {
                    background-color: ${props => (props.smallFrame ? '#000000' : 'unset')};
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

        /** Loading */
        .ant-spin-dot-item {
            background-color: #f69127;
        }
    }
`

export const GlobalStyledTable = createGlobalStyle`
    .ant-table-filter-dropdown {
        background-color: #FFFFFF !important;
        padding: 8px !important;
        border-bottom-left-radius: 4px !important;
        border-bottom-right-radius: 4px !important;
    }
`

export const StyledTableContainer = styled.div`
    height: 80%;
    width: 80%;
    padding-bottom: 20px;

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

    &&& .ant-table-filter-trigger:hover,
    &&& .ant-table-filter-trigger-container-open,
    &&& .ant-table-filter-trigger-container:hover,
    &&& .ant-table-filter-trigger-container:hover {
        background-color: #e2e2e2 !important;
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

export const StyledEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
