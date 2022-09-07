/* eslint-disable no-unused-vars */
import React from 'react'
import TeamLayout from 'containers/team-layout'
import { act } from '@testing-library/react'
import axios from 'axios'
import { mount } from 'enzyme'
import { playerData } from '../../__mocks__/axiosMocks'
import { waitStateUpdate } from '../../__mocks__/utils'

jest.mock('axios')

axios.get.mockImplementation(url => {
    if (url === 'https://soccer.sportmonks.com/api/v2.0/teams/1?include=squad.player,venue,country') {
        return Promise.resolve({ data: {} })
    }
    return Promise.reject(new Error('Error'))
})

describe('Team Layout container tests', () => {
    it('should render data correctly', () => {
        const wrapper = mount(<TeamLayout teamId={1} />)

        expect(wrapper).toMatchSnapshot()
    })
})
