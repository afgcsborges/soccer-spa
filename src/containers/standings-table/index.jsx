import React, { useEffect, useState } from 'react'
import { get, groupBy, isEmpty } from 'lodash'
import { getStandingsColumns, getTopScorersColumns } from './columns'

import PropTypes from 'prop-types'
import Select from 'components/select'
import Space from 'components/space'
import Switch from 'components/switch'
import Table from 'components/table'

const ZERO = 0

const mapLeagueRows = (data, isGroup) =>
    data.map(leagueRow => ({
        difference: get(leagueRow, 'total.goal_difference'),
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
            'standings.data',
            []
        )
    if(isEmpty(stageData)) return []
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

const StandingsTable = ({ handlePlayerNameClick, handleTeamNameClick, standingsData, topScorersData }) => {
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
            columns={getTopScorersColumns(handlePlayerNameClick)}
            dataSource={getTopScorers()}
            emptyText="No results to show."
            rowKey={'key'}
            header={getTableHeader}
            footer={() => ''}
        />
    ) : (
        <Table
            columns={getStandingsColumns(handleTeamNameClick)}
            dataSource={getStandings()}
            emptyText="No results to show."
            rowKey={'position'}
            header={getTableHeader}
            footer={() => ''}
        />
    )
}

StandingsTable.propTypes = {
    handlePlayerNameClick: PropTypes.func,
    handleTeamNameClick: PropTypes.func,
    standingsData: PropTypes.array,
    topScorersData: PropTypes.object
}
export default StandingsTable
