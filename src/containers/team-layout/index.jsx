/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { get, isEmpty } from 'lodash'
import Button from 'components/button'
import PropTypes from 'prop-types'
import Table from 'components/table'
import TeamInformation from 'containers/team-information'
import Text from 'components/text'
import { getTeamPlayers } from 'state/axios'

const numberColumn = () => ({
    align: 'center',
    dataIndex: 'number',
    key: 'number',
    render: (_, item) => <Text strong label={item.number} level={3} type={'default'} />,
    sorter: (a, b) => (a.number === '' ? 1 : a.number - b.number),
    title: <Text strong label={'Number'} level={2} />
})
const playerNameColumn = () => ({
    dataIndex: 'playerName',
    key: 'playerName',
    render: (_, item) => <Text strong label={item.playerName} level={3} type={'default'} />,
    sorter: (a, b) => a.playerName?.localeCompare(b.playerName),
    title: <Text strong label={'Player Name'} level={2} />
})
const appearencesColumn = () => ({
    align: 'center',
    dataIndex: 'appearences',
    key: 'appearences',
    render: (_, item) => <Text strong label={item.appearences} level={3} type={'default'} />,
    sorter: (a, b) => a.appearences - b.appearences,
    title: <Text strong label={'Appearences'} level={2} />
})
const goalsColumn = () => ({
    align: 'center',
    dataIndex: 'goals',
    key: 'goals',
    render: (_, item) => <Text strong label={item.goals} level={3} type={'default'} />,
    sorter: (a, b) => a.goals - b.goals,
    title: <Text strong label={'Goals'} level={2} />
})
const assistsColumn = () => ({
    align: 'center',
    dataIndex: 'assists',
    key: 'assists',
    render: (_, item) => <Text strong label={item.assists} level={3} type={'default'} />,
    sorter: (a, b) => a.assists - b.assists,
    title: <Text strong label={'Assists'} level={2} />
})
const ratingColumn = () => ({
    align: 'center',
    dataIndex: 'rating',
    key: 'rating',
    render: (_, item) => <Text strong label={item.rating} level={3} type={'default'} />,
    sorter: (a, b) => a.rating - b.rating,
    title: <Text strong label={'Rating'} level={2} />
})
const getTeamPlayerColumns = () => [
    numberColumn(),
    playerNameColumn(),
    appearencesColumn(),
    goalsColumn(),
    assistsColumn(),
    ratingColumn()
]

const mapTeamPlayersData = data => {
    const squad = get(data, 'squad.data')
    return squad
        .map(_ => ({
            appearences: _.appearences,
            assists: _.assists,
            captain: _.captain === 1,
            goals: _.goals,
            number: _.number || '',
            playerId: _.player_id,
            playerName: _.captain === 1 ? `${_.player.data.display_name} (Captain)` : _.player.data.display_name,
            rating: _.rating
        }))
        .sort((a, b) => (a.number === '' ? 1 : a.number - b.number))
}

const TeamLayout = ({ apiKey, teamId, onButtonClick }) => {
    const [teamPlayersData, setTeamPlayersData] = useState({})
    const [teamPlayers, setTeamPlayers] = useState([])
    const getTableHeader = () => (
        <>
            <TeamInformation teamData={teamPlayersData} apiKey={apiKey}/>
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
            columns={getTeamPlayerColumns()}
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
    teamId: PropTypes.number
}
export default TeamLayout
