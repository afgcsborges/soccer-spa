/* eslint-disable no-unused-vars */
import React from 'react'
import TeamInformation from 'containers/team-information'
import { act } from '@testing-library/react'
import { mount } from 'enzyme'
import { playerData } from '../../__mocks__/axiosMocks'
import { waitStateUpdate } from '../../__mocks__/utils'

describe('Team Information container tests', () => {
    it('should render data correctly', () => {
        const wrapper = mount(<TeamInformation />)

        expect(wrapper).toMatchSnapshot()
    })
})
