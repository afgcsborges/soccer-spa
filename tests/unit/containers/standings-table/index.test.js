import { standingsData, topScorersData } from '../../__mocks__/axiosMocks'

import React from 'react'
import StandingsTable from 'containers/standings-table'
import { act } from '@testing-library/react'
import { mount } from 'enzyme'
import { waitStateUpdate } from '../../__mocks__/utils'

describe('Standings Table container tests', () => {
    it('should render standings data correctly', async () => {
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

    it('should render top scorers data correctly after toggle', async () => {
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

        act(() => {
            wrapper.find('Switch').at(0).props().onChange()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([
            {
                assists: 3,
                goals: 6,
                key: '17225019686Viktor Claesson',
                penalty: 0,
                playerId: 172250,
                playerName: 'Viktor Claesson',
                position: 1,
                teamId: 85,
                teamName: 'København'
            },
            {
                assists: 0,
                goals: 5,
                key: '44734419686Pep Biel',
                penalty: 2,
                playerId: 447344,
                playerName: 'Pep Biel',
                position: 2,
                teamId: 85,
                teamName: 'Olympiakos Piraeus'
            },
            {
                assists: 0,
                goals: 4,
                key: '3755581519686Andreas Schjelderup',
                penalty: 1,
                playerId: 37555815,
                playerName: 'Andreas Schjelderup',
                position: 3,
                teamId: 2394,
                teamName: 'Nordsjælland'
            },
            {
                assists: 0,
                goals: 3,
                key: '8462019686Anders Dreyer',
                penalty: 0,
                playerId: 84620,
                playerName: 'Anders Dreyer',
                position: 4,
                teamId: 939,
                teamName: 'Midtjylland'
            }
        ])
    })

    it('should handle toggle back and forth', async () => {
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

        act(() => {
            wrapper.find('Switch').at(0).props().onChange()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('Switch').at(0).props().onChange()
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

    it('should handle data change to empty', async () => {
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

        act(() => {
            wrapper.setProps({ standingsData: [], topScorersData: {} })
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([])
    })

    it('should handle stage change and group standings', async () => {
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

        act(() => {
            wrapper.find('Select').at(0).props().onChange('77443800')
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([
            {
                difference: '1',
                draw: 7,
                goal: '43-42',
                lost: 13,
                played: 32,
                points: 43,
                position: 'Group 1 | 1',
                positionSorter: 1,
                scored: 43,
                teamId: 1789,
                teamName: 'OB',
                won: 12
            },
            {
                difference: '-12',
                draw: 11,
                goal: '37-49',
                lost: 12,
                played: 32,
                points: 38,
                position: 'Group 1 | 2',
                positionSorter: 2,
                scored: 37,
                teamId: 390,
                teamName: 'SønderjyskE',
                won: 9
            },
            {
                difference: '-20',
                draw: 7,
                goal: '34-54',
                lost: 16,
                played: 32,
                points: 34,
                position: 'Group 1 | 3',
                positionSorter: 3,
                scored: 34,
                teamId: 2650,
                teamName: 'Lyngby',
                won: 9
            },
            {
                difference: '-16',
                draw: 8,
                goal: '43-59',
                lost: 18,
                played: 32,
                points: 26,
                position: 'Group 1 | 4',
                positionSorter: 4,
                scored: 43,
                teamId: 86,
                teamName: 'Silkeborg',
                won: 6
            }
        ])
    })

    it('should handle stage change to invalid stage', async () => {
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

        act(() => {
            wrapper.find('Select').at(0).props().onChange('INVALID')
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([])
    })

    it('should not fail when no data and stage change', async () => {
        const onPlayerNameClick = jest.fn()
        const onTeamNameClick = jest.fn()
        const wrapper = mount(
            <StandingsTable
                handlePlayerNameClick={onPlayerNameClick}
                handleTeamNameClick={onTeamNameClick}
                topScorersData={{}}
                standingsData={[]}
            />
        )

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('Select').at(0).props().onChange('INVALID')
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Table').at(0).props().dataSource).toMatchObject([])
    })

    it('should handle sorters', async () => {
        const wrapper = mount(
            <StandingsTable topScorersData={topScorersData.data} standingsData={standingsData.data} />
        )

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
        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(5).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(6).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        act(() => {
            wrapper.find('[className="ant-table-cell ant-table-column-has-sorters"]').at(7).props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })

        await waitStateUpdate()

        act(() => {
            wrapper.find('Switch').at(0).props().onChange()
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

    it('should handle onTeamClick and onPlayerclick', async () => {
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

        act(() => {
            wrapper.find('[label="Midtjylland"]').parent().props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('Switch').at(0).props().onChange()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        act(() => {
            wrapper.find('[label="Viktor Claesson"]').parent().props().onClick()
        })

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()
        expect(wrapper).toMatchSnapshot()
        expect(onTeamNameClick).toHaveBeenCalled()
        expect(onPlayerNameClick).toHaveBeenCalled()
    })
})
