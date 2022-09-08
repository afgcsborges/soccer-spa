import { leagueAndSeasonData, playerData, standingsData, teamData, topScorersData } from '../../__mocks__/axiosMocks'

import Home from 'pages/home'
import React from 'react'
import { act } from '@testing-library/react'
import axios from 'axios'
import { mount } from 'enzyme'
import { waitStateUpdate } from '../../__mocks__/utils'

jest.mock('axios')

axios.get.mockImplementation(url => {
    if (url === 'https://soccer.sportmonks.com/api/v2.0/leagues?include=seasons') {
        return Promise.resolve({ data: leagueAndSeasonData })
    }
    if (url === 'https://soccer.sportmonks.com/api/v2.0/standings/season/77443802') {
        return Promise.resolve({ data: standingsData })
    }
    if (url === 'https://soccer.sportmonks.com/api/v2.0/topscorers/season/77443802?include=goalscorers.player.team') {
        return Promise.resolve({ data: topScorersData })
    }
    if (url === 'https://soccer.sportmonks.com/api/v2.0/teams/939?include=squad.player,venue,country') {
        return Promise.resolve({ data: teamData })
    }
    if (url === 'https://soccer.sportmonks.com/api/v2.0/players/83495?include=position,team') {
        return Promise.resolve({ data: playerData })
    }
    return Promise.reject(new Error('Error'))
})

describe('Home page tests', () => {
    it('should render app correctly', async () => {
        const wrapper = mount(<Home />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Select').at(0).props().options).toMatchObject([
            { key: '271', label: 'Superliga' },
            { key: '501', label: 'Premiership' }
        ])
        expect(wrapper.find('Select').at(2).props().options).toMatchObject([])
    })

    it('should render season select options and table after league select', async () => {
        const wrapper = mount(<Home />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.find('Select').at(0).props().onChange('271')
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Select').at(2).props().options).toMatchObject([
            { key: '77443802', label: '2022/2023' },
            { key: '18334', label: '2021/2022' }
        ])
        expect(wrapper.find('Select').at(2).props().value).toBe('77443802')
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([
            {
                difference: '28',
                draw: 2,
                goal: '42-14',
                lost: 3,
                played: 26,
                points: 65,
                position: 1,
                positionSorter: 1,
                scored: 42,
                teamId: 939,
                teamName: 'Midtjylland',
                won: 21
            },
            {
                difference: '18',
                draw: 2,
                goal: '47-29',
                lost: 6,
                played: 26,
                points: 56,
                position: 2,
                positionSorter: 2,
                scored: 47,
                teamId: 85,
                teamName: 'København',
                won: 18
            },
            {
                difference: '14',
                draw: 5,
                goal: '42-28',
                lost: 7,
                played: 26,
                points: 47,
                position: 3,
                positionSorter: 3,
                scored: 42,
                teamId: 2905,
                teamName: 'AGF',
                won: 14
            },
            {
                difference: '10',
                draw: 3,
                goal: '47-37',
                lost: 10,
                played: 26,
                points: 42,
                position: 4,
                positionSorter: 4,
                scored: 47,
                teamId: 293,
                teamName: 'Brøndby',
                won: 13
            },
            {
                difference: '13',
                draw: 5,
                goal: '48-35',
                lost: 9,
                played: 26,
                points: 41,
                position: 5,
                positionSorter: 5,
                scored: 48,
                teamId: 2394,
                teamName: 'Nordsjælland',
                won: 12
            }
        ])
    })

    it('should render team info and players after team click', async () => {
        const wrapper = mount(<Home />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.find('Select').at(0).props().onChange('271')
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[label="Midtjylland"]').parent().props().onClick()
        })

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

    it('should render team info and players and go back to standings after close', async () => {
        const wrapper = mount(<Home />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.find('Select').at(0).props().onChange('271')
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[label="Midtjylland"]').parent().props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

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
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([
            {
                difference: '28',
                draw: 2,
                goal: '42-14',
                lost: 3,
                played: 26,
                points: 65,
                position: 1,
                positionSorter: 1,
                scored: 42,
                teamId: 939,
                teamName: 'Midtjylland',
                won: 21
            },
            {
                difference: '18',
                draw: 2,
                goal: '47-29',
                lost: 6,
                played: 26,
                points: 56,
                position: 2,
                positionSorter: 2,
                scored: 47,
                teamId: 85,
                teamName: 'København',
                won: 18
            },
            {
                difference: '14',
                draw: 5,
                goal: '42-28',
                lost: 7,
                played: 26,
                points: 47,
                position: 3,
                positionSorter: 3,
                scored: 42,
                teamId: 2905,
                teamName: 'AGF',
                won: 14
            },
            {
                difference: '10',
                draw: 3,
                goal: '47-37',
                lost: 10,
                played: 26,
                points: 42,
                position: 4,
                positionSorter: 4,
                scored: 47,
                teamId: 293,
                teamName: 'Brøndby',
                won: 13
            },
            {
                difference: '13',
                draw: 5,
                goal: '48-35',
                lost: 9,
                played: 26,
                points: 41,
                position: 5,
                positionSorter: 5,
                scored: 48,
                teamId: 2394,
                teamName: 'Nordsjælland',
                won: 12
            }
        ])
    })

    it('should render player profileand close on button click', async () => {
        const wrapper = mount(<Home />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.find('Select').at(0).props().onChange('271')
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[label="Midtjylland"]').parent().props().onClick()
        })

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
        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper.find('DisplayBox').at(0).props().value).toBe(playerData.data.firstname)
        expect(wrapper.find('DisplayBox').at(1).props().value).toBe(playerData.data.lastname)
        expect(wrapper.find('DisplayBox').at(2).props().value).toBe(playerData.data.nationality)
        expect(wrapper.find('DisplayBox').at(3).props().value).toBe(playerData.data.team.data.name)
        expect(wrapper.find('DisplayBox').at(4).props().value).toBe(playerData.data.birthdate)
        expect(wrapper.find('DisplayBox').at(5).props().value).toBe(playerData.data.position.data.name)
        expect(wrapper.find('DisplayBox').at(6).props().value).toBe(playerData.data.height)
        expect(wrapper.find('DisplayBox').at(7).props().value).toBe(playerData.data.weight)

        act(() => {
            wrapper.find('PlayerProfile').props().onClose()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('PlayerProfile').exists()).toBeFalsy()
    })
})
