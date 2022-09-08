/* eslint-disable no-unused-vars */
import Home from 'pages/home'
import React from 'react'
import { act } from '@testing-library/react'
import axios from 'axios'
import { mount } from 'enzyme'
import { playerData } from '../../__mocks__/axiosMocks'
import { waitStateUpdate } from '../../__mocks__/utils'

jest.mock('axios')

axios.get.mockImplementation(url => {
    if (url === 'https://soccer.sportmonks.com/api/v2.0/leagues?include=seasons') {
        return Promise.resolve({ data: { data: [] } })
    }
    return Promise.reject(new Error('Error'))
})

describe('Home page tests', () => {
    it('should render data correctly', async () => {
        const wrapper = mount(<Home />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
    })
})
