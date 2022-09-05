import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import Table from 'components/table'
import Text from 'components/text'
import { isEmpty } from 'lodash'

const FIRST_ELEMENT = 0

const positionColumn = () => ({
    align: 'center',
    dataIndex: 'position',
    key: 'position',
    render: (_, item) => <Text strong label={item.position} level={3} type={'default'} />,
    sorter: (a, b) => a.position - b.position,
    title: <Text strong label={'Position'} level={2} />
})

const teamNameColumn = () => ({
    dataIndex: 'teamName',
    key: 'teamName',
    render: (_, item) => (
        <div
            onClick={() => {
                console.log('clicked')
            }}
        >
            <Text strong label={item.teamName} level={3} type={'default'} />
        </div>
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


const getColumns = () => [positionColumn(), teamNameColumn(), playedColumn(), wonColumn(), drawColumn(), lostColumn(), goalColumn(), differenceColumn(), pointsColumn()]

const mapStandingsData = data =>
    data[FIRST_ELEMENT].standings.data.map(_ => ({
            difference: _.overall?.goals_scored - _.overall?.goals_against || FIRST_ELEMENT,
            draw: _.overall?.draw,
            goal: `${_.overall?.goals_scored}-${_.overall?.goals_against}`,
            lost: _.overall?.lost,
            played: _.overall?.games_played,
            points: _.points,
            position: _.position,
            scored: _.overall?.goals_scored,
            teamName: _.team_name,
            won: _.overall?.won
        }))

const StandingsTable = ({ tableData }) => {
    const [standingsData, setStandingsData] = useState([])

    useEffect(() => {
        if (isEmpty(tableData)) {
            setStandingsData([])
        } else {
            setStandingsData(mapStandingsData(tableData))
        }
    }, [tableData])

    return <Table columns={getColumns()} dataSource={standingsData} emptyText="No results to show." rowKey="position" />
}

StandingsTable.propTypes = {
    tableData: PropTypes.array
}
export default StandingsTable
