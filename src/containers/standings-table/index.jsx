import React, { useEffect, useState } from 'react'
import { get, groupBy, isEmpty } from 'lodash'

import PropTypes from 'prop-types'
import Select from 'components/select'
import Space from 'components/space'
import Switch from 'components/switch'
import Table from 'components/table'
import Text from 'components/text'

const ZERO = 0

const positionColumn = () => ({
    align: 'center',
    dataIndex: 'position',
    key: 'position',
    render: (_, item) => <Text strong label={item.position} level={3} type={'default'} />,
    sorter: (a, b) => a.positionSorter - b.positionSorter,
    title: <Text strong label={'Position'} level={2} />
})
const teamNameColumn = onClick => ({
    dataIndex: 'teamName',
    key: 'teamName',
    render: (_, item) =>
        onClick ? (
            <div
                onClick={() => {
                    onClick(item.teamId)
                }}
                style={{ cursor: 'pointer' }}
            >
                <Text strong label={item.teamName} level={3} type={'default'} />
            </div>
        ) : (
            <Text strong label={item.teamName} level={3} type={'default'} />
        ),
    sorter: (a, b) => a.teamName?.localeCompare(b.teamName),
    title: <Text strong label={'Team Name'} level={2} />
})
const playedColumn = () => ({
    align: 'center',
    dataIndex: 'played',
    key: 'played',
    render: (_, item) => <Text strong label={item.played} level={3} type={'default'} />,
    sorter: (a, b) => a.played - b.played,
    title: <Text strong label={'Played'} level={2} />
})
const wonColumn = () => ({
    align: 'center',
    dataIndex: 'won',
    key: 'won',
    render: (_, item) => <Text strong label={item.won} level={3} type={'default'} />,
    sorter: (a, b) => a.won - b.won,
    title: <Text strong label={'Won'} level={2} />
})
const drawColumn = () => ({
    align: 'center',
    dataIndex: 'draw',
    key: 'draw',
    render: (_, item) => <Text strong label={item.draw} level={3} type={'default'} />,
    sorter: (a, b) => a.draw - b.draw,
    title: <Text strong label={'Draw'} level={2} />
})
const lostColumn = () => ({
    align: 'center',
    dataIndex: 'lost',
    key: 'lost',
    render: (_, item) => <Text strong label={item.lost} level={3} type={'default'} />,
    sorter: (a, b) => a.lost - b.lost,
    title: <Text strong label={'Lost'} level={2} />
})
const goalColumn = () => ({
    align: 'center',
    dataIndex: 'goal',
    key: 'goal',
    render: (_, item) => <Text strong label={item.goal} level={3} type={'default'} />,
    sorter: (a, b) => a.scored - b.scored,
    title: <Text strong label={'Goal'} level={2} />
})
const differenceColumn = () => ({
    align: 'center',
    dataIndex: 'difference',
    key: 'difference',
    render: (_, item) => <Text strong label={item.difference} level={3} type={'default'} />,
    sorter: (a, b) => a.difference - b.difference,
    title: <Text strong label={'Difference'} level={2} />
})
const pointsColumn = () => ({
    align: 'center',
    dataIndex: 'points',
    key: 'points',
    render: (_, item) => <Text strong label={item.points} level={3} type={'default'} />,
    sorter: (a, b) => a.points - b.points,
    title: <Text strong label={'Points'} level={2} />
})
const playerNameColumn = () => ({
    dataIndex: 'playerName',
    key: 'playerName',
    render: (_, item) => <Text strong label={item.playerName} level={3} type={'default'} />,
    sorter: (a, b) => a.playerName?.localeCompare(b.playerName),
    title: <Text strong label={'Player Name'} level={2} />
})
const goalsColumn = () => ({
    align: 'center',
    dataIndex: 'goals',
    key: 'goals',
    render: (_, item) => <Text strong label={item.goals} level={3} type={'default'} />,
    sorter: (a, b) => a.goals - b.goals,
    title: <Text strong label={'Goals'} level={2} />
})
const penaltyColumn = () => ({
    align: 'center',
    dataIndex: 'penalty',
    key: 'penalty',
    render: (_, item) => <Text strong label={item.penalty} level={3} type={'default'} />,
    sorter: (a, b) => a.penalty - b.penalty,
    title: <Text strong label={'Penalty'} level={2} />
})
const assistsColumn = () => ({
    align: 'center',
    dataIndex: 'assists',
    key: 'assists',
    render: (_, item) => <Text strong label={item.assists} level={3} type={'default'} />,
    sorter: (a, b) => a.assists - b.assists,
    title: <Text strong label={'Assists'} level={2} />
})
const getStandingsColumns = onNameClick => [
    positionColumn(),
    teamNameColumn(onNameClick),
    playedColumn(),
    wonColumn(),
    drawColumn(),
    lostColumn(),
    goalColumn(),
    differenceColumn(),
    pointsColumn()
]
const getTopScorersColumns = () => [
    positionColumn(),
    playerNameColumn(),
    teamNameColumn(),
    goalsColumn(),
    penaltyColumn(),
    assistsColumn()
]

const mapLeagueRows = (data, isGroup) =>
    data.map(leagueRow => ({
        difference: get(leagueRow, 'total.goal_difference') || ZERO,
        draw: get(leagueRow, 'overall.draw'),
        goal: `${get(leagueRow, 'overall.goals_scored')}-${get(leagueRow, 'overall.goals_against')}`,
        lost: get(leagueRow, 'overall.lost'),
        played: get(leagueRow, 'overall.games_played'),
        points: get(leagueRow, 'points'),
        position: isGroup
            ? `${get(leagueRow, 'group_name')} | ${get(leagueRow, 'position')}`
            : get(leagueRow, 'position'),
        positionSorter: leagueRow.position,
        scored: get(leagueRow, 'overall.goals_scored'),
        teamId: get(leagueRow, 'team_id'),
        teamName: get(leagueRow, 'team_name'),
        won: get(leagueRow, 'overall.won')
    }))
const mapStandingsData = (data, selectedStage) => {
    const stageData =
        get(
            data?.find(stage => `${stage.id}` === selectedStage),
            'standings.data'
        ) || []
    if (isEmpty(stageData)) return []
    if (stageData[ZERO].resource === 'group') {
        const result = []
        stageData.forEach(group => {
            result.push(mapLeagueRows(group.standings.data, true))
        })
        return result.flat()
    }
    return mapLeagueRows(stageData, false)
}

const mapTopScorersData = (groupedGoalScorers, assistsScorers, stage) => {
    const currentStageGoalScorers = get(groupedGoalScorers, stage, [])
    return currentStageGoalScorers.map(player => {
        const playerId = get(player, 'player_id')
        const assists = get(
            assistsScorers?.find(assistPlayer => assistPlayer.player_id === playerId),
            'assists',
            ZERO
        )
        return {
            assists,
            goals: get(player, 'goals', ZERO),
            key: `${playerId}${get(player, 'season_id')}${get(player, 'player.data.display_name')}`,
            penalty: get(player, 'penalty_goals', ZERO),
            playerId,
            playerName: get(player, 'player.data.display_name', ''),
            position: get(player, 'position'),
            teamId: get(player, 'team_id', ''),
            teamName: get(player, 'player.data.team.data.name', '')
        }
    })
}

const StandingsTable = ({ handleNameClick, standingsData, topScorersData }) => {
    const [standings, setStandings] = useState([])
    const [topScorers, setTopScorers] = useState([])
    const [toggle, setToggle] = useState(false)
    const [stage, setStage] = useState(null)
    const [stageOptions, setStageOptions] = useState([])
    const [groupedGoalScorers, setGroupedGoalScorers] = useState({})
    const handleToggle = () => {
        if (toggle) setToggle(false)
        else setToggle(true)
    }
    const getTableHeader = () => (
        <Space>
            <Switch
                uncheckedLabel={'Standings'}
                checkedLabel={'Top Scorers'}
                checked={toggle}
                onChange={handleToggle}
            />
            <div style={{ position: 'absolute', right: '0px', width: '200px' }}>
                <Select
                    allowClear={false}
                    placeholder={'Stage'}
                    options={stageOptions}
                    value={stage}
                    onChange={setStage}
                    size={'middle'}
                />
            </div>
        </Space>
    )

    useEffect(() => {
        if (isEmpty(standingsData)) {
            setStandings([])
            setStage(null)
            setStageOptions([])
        } else {
            setStageOptions(
                standingsData.map(stageOption => ({ key: `${stageOption.stage_id}`, label: stageOption.stage_name }))
            )
            setStage(`${standingsData[ZERO].id}`)
        }
    }, [standingsData])

    useEffect(() => {
        if (isEmpty(topScorersData)) {
            setTopScorers([])
        } else {
            const groupedStageGoalScorers = groupBy(get(topScorersData, 'goalscorers.data'), 'stage_id')
            setGroupedGoalScorers(groupedStageGoalScorers)
        }
    }, [topScorersData])

    useEffect(() => {
        if (stage === null) {
            setStandings([])
            setTopScorers([])
        } else {
            if (!isEmpty(groupedGoalScorers)) {
                const assistsScorers = get(topScorersData, 'assistscorers.data')
                setTopScorers(mapTopScorersData(groupedGoalScorers, assistsScorers, stage))
            }
            if (!isEmpty(standingsData)) setStandings(mapStandingsData(standingsData, stage))
        }
    }, [stage, groupedGoalScorers])

    const getStandings = () => standings
    const getTopScorers = () => topScorers

    return toggle ? (
        <Table
            columns={getTopScorersColumns()}
            dataSource={getTopScorers()}
            emptyText="No results to show."
            rowKey={toggle ? 'key' : 'position'}
            header={getTableHeader}
            footer={() => ''}
        />
    ) : (
        <Table
            columns={getStandingsColumns(handleNameClick)}
            dataSource={getStandings()}
            emptyText="No results to show."
            rowKey={toggle ? 'key' : 'position'}
            header={getTableHeader}
            footer={() => ''}
        />
    )
}

StandingsTable.propTypes = {
    handleNameClick: PropTypes.func,
    standingsData: PropTypes.array,
    topScorersData: PropTypes.object
}
export default StandingsTable
