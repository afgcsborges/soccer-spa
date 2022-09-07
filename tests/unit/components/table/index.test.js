import React from 'react'
import Table from 'components/table'
import { act } from '@testing-library/react'
import { mount } from 'enzyme'

const playerSorter = jest.fn()
const teamSorter = jest.fn()
const columns = [
    {
        dataIndex: 'team',
        key: 'team',
        sorter: teamSorter,
        title: 'Tame'
    },
    {
        dataIndex: 'player',
        key: 'player',
        sorter: playerSorter,
        title: 'Player'
    }
]

const dataSource = [
    {
        player: 'PLAYER_1',
        team: 'TEAM_1'
    },
    {
        player: 'PLAYER_2',
        team: 'TEAM_2'
    }
]

it('should render correctly and call sorter', async () => {
    const wrapper = mount(
        <Table
            columns={columns}
            dataSource={dataSource}
            emptyText={'EMPTY_TEXT'}
            rowKey={'team'}
            header={() => ''}
            footer={() => ''}
        />
    )

    act(() => {
        wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(0).props().onClick()
    })

    await act(async () => {
        await wrapper.update()
    })
    expect(wrapper).toMatchSnapshot()

    expect(teamSorter).toHaveBeenCalled()
})
