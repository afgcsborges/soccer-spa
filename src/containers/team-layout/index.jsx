import React, { useEffect, useState } from 'react'
import { get, isEmpty } from 'lodash'

import Button from 'components/button'
import PropTypes from 'prop-types'
import Table from 'components/table'
import TeamInformation from 'containers/team-information'
import { getTeamPlayerColumns } from './columns'
import { getTeamPlayers } from 'state/axios'

const ONE = 1
const ZERO = 0

const mapTeamPlayersData = data => {
    const squad = get(data, 'squad.data')
    return squad
        .map(player => ({
            appearences: get(player, 'appearences') || ZERO,
            assists: get(player, 'assists') || ZERO,
            goals: get(player, 'goals') || ZERO,
            number: get(player, 'number') || '',
            playerId: get(player, 'player_id'),
            playerName:
                player.captain === ONE
                    ? `${get(player, 'player.data.display_name', '')} (Captain)`
                    : get(player, 'player.data.display_name', ''),
            rating: get(player, 'rating', '')
        }))
        .sort((a, b) => (a.number === '' ? ONE : a.number - b.number))
}

const TeamLayout = ({ apiKey, teamId, onButtonClick, onPlayerClick }) => {
    const [teamPlayersData, setTeamPlayersData] = useState({})
    const [teamPlayers, setTeamPlayers] = useState([])

    const getTableHeader = () => (
        <>
            <TeamInformation teamData={teamPlayersData} apiKey={apiKey} />
            <Button label={'Back to standings'} onClick={onButtonClick} />
        </>
    )

    useEffect(() => {
        if (teamId !== null) {
            getTeamPlayers(apiKey, setTeamPlayersData, teamId)
        }
    }, [])

    useEffect(() => {
        if (isEmpty(teamPlayersData)) {
            setTeamPlayers([])
        } else {
            setTeamPlayers(mapTeamPlayersData(teamPlayersData))
        }
    }, [teamPlayersData])

    const getTeamPlayersInfo = () => teamPlayers

    return (
        <Table
            columns={getTeamPlayerColumns(onPlayerClick)}
            dataSource={getTeamPlayersInfo()}
            emptyText="No results to show."
            rowKey={'playerName'}
            header={getTableHeader}
            footer={() => ''}
        />
    )
}

TeamLayout.propTypes = {
    apiKey: PropTypes.string,
    onButtonClick: PropTypes.func,
    onPlayerClick: PropTypes.func,
    teamId: PropTypes.number
}

export default TeamLayout
