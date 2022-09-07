import { standingsData, topScorersData } from '../../__mocks__/axiosMocks'

import React from 'react'
import StandingsTable from 'containers/standings-table'
import { act } from '@testing-library/react'
import { mount } from 'enzyme'
import { waitStateUpdate } from '../../__mocks__/utils'

describe('Palyer Profile tests', () => {
    it('should render data correctly', async () => {
        const onPlayerNameClick = jest.fn()
        const onTeamNameClick = jest.fn()
        const wrapper = mount(
            <StandingsTable
                handlePlayerNameClick={onPlayerNameClick}
                handleTeamNameClick={onTeamNameClick}
                topScorersData={topScorersData.data}
                standingsData={standingsData.data}
            />
        )

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
    })
})
