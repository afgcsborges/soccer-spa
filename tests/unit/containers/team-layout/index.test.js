/* eslint-disable no-unused-vars */
import React from 'react'
import TeamLayout from 'containers/team-layout'
import { act } from '@testing-library/react'
import axios from 'axios'
import { mount } from 'enzyme'
import { teamData } from '../../__mocks__/axiosMocks'
import { waitStateUpdate } from '../../__mocks__/utils'

jest.mock('axios')

axios.get.mockImplementation(url => {
    if (url === 'https://soccer.sportmonks.com/api/v2.0/teams/1?include=squad.player,venue,country') {
        return Promise.resolve({ data: teamData })
    }
    return Promise.reject(new Error('Error'))
})

describe('Team Layout container tests', () => {
    it('should render data correctly', async () => {
        const wrapper = mount(<TeamLayout teamId={1} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([
            {
                appearences: 7,
                assists: 0,
                goals: 0,
                number: 4,
                playerId: 83495,
                playerName: 'Kian Hansen (Captain)',
                rating: '7.07'
            },
            {
                appearences: 7,
                assists: 0,
                goals: 0,
                number: 23,
                playerId: 37259994,
                playerName: 'Oliver Marc Rose-Villadsen',
                rating: '6.73'
            },
            {
                appearences: 0,
                assists: 0,
                goals: 0,
                number: 31,
                playerId: 37324999,
                playerName: 'Andreas Pedersen',
                rating: null
            },
            {
                appearences: 7,
                assists: 0,
                goals: 0,
                number: '',
                playerId: 37407422,
                playerName: 'D. Svensson',
                rating: '6.69'
            }
        ])
    })

    it('should not call api with null teamId', async () => {
        const wrapper = mount(<TeamLayout teamId={null} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(axios.get).toHaveBeenCalledTimes(0)
    })

    it('should handle sorters', async () => {
        const wrapper = mount(<TeamLayout teamId={1} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(0).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(1).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(1).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(2).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(3).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(4).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
    })

    it('should handle onPlayerClick and onButtonClick', async () => {
        const onPlayerClick = jest.fn()
        const onButtonClick = jest.fn()
        const wrapper = mount(<TeamLayout teamId={1} onButtonClick={onButtonClick} onPlayerClick={onPlayerClick} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[label="Kian Hansen (Captain)"]').parent().props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('Button').at(0).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(onPlayerClick).toHaveBeenCalled()
        expect(onButtonClick).toHaveBeenCalled()
    })
})
