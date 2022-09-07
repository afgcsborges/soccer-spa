import React from 'react'
import Text from 'components/text'

const positionColumn = () => ({
    align: 'center',
    dataIndex: 'position',
    key: 'position',
    render: (_, item) => <Text strong label={item.position} level={3} />,
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
                <Text strong label={item.teamName} level={3} underline />
            </div>
        ) : (
            <Text strong label={item.teamName} level={3} />
        ),
    sorter: (a, b) => a.teamName?.localeCompare(b.teamName),
    title: <Text strong label={'Team Name'} level={2} />
})
const playedColumn = () => ({
    align: 'center',
    dataIndex: 'played',
    key: 'played',
    render: (_, item) => <Text strong label={item.played} level={3} />,
    sorter: (a, b) => a.played - b.played,
    title: <Text strong label={'Played'} level={2} />
})
const wonColumn = () => ({
    align: 'center',
    dataIndex: 'won',
    key: 'won',
    render: (_, item) => <Text strong label={item.won} level={3} />,
    sorter: (a, b) => a.won - b.won,
    title: <Text strong label={'Won'} level={2} />
})
const drawColumn = () => ({
    align: 'center',
    dataIndex: 'draw',
    key: 'draw',
    render: (_, item) => <Text strong label={item.draw} level={3} />,
    sorter: (a, b) => a.draw - b.draw,
    title: <Text strong label={'Draw'} level={2} />
})
const lostColumn = () => ({
    align: 'center',
    dataIndex: 'lost',
    key: 'lost',
    render: (_, item) => <Text strong label={item.lost} level={3} />,
    sorter: (a, b) => a.lost - b.lost,
    title: <Text strong label={'Lost'} level={2} />
})
const goalColumn = () => ({
    align: 'center',
    dataIndex: 'goal',
    key: 'goal',
    render: (_, item) => <Text strong label={item.goal} level={3} />,
    sorter: (a, b) => a.scored - b.scored,
    title: <Text strong label={'Goal'} level={2} />
})
const differenceColumn = () => ({
    align: 'center',
    dataIndex: 'difference',
    key: 'difference',
    render: (_, item) => <Text strong label={item.difference} level={3} />,
    sorter: (a, b) => a.difference - b.difference,
    title: <Text strong label={'Difference'} level={2} />
})
const pointsColumn = () => ({
    align: 'center',
    dataIndex: 'points',
    key: 'points',
    render: (_, item) => <Text strong label={item.points} level={3} />,
    sorter: (a, b) => a.points - b.points,
    title: <Text strong label={'Points'} level={2} />
})

const playerNameColumn = onClick => ({
    dataIndex: 'playerName',
    key: 'playerName',
    render: (_, item) =>
        onClick ? (
            <div
                onClick={() => {
                    onClick(item.playerId)
                }}
                style={{ cursor: 'pointer' }}
            >
                <Text strong label={item.playerName} level={3} underline />
            </div>
        ) : (
            <Text strong label={item.playerName} level={3} />
        ),
    sorter: (a, b) => a.playerName?.localeCompare(b.playerName),
    title: <Text strong label={'Player Name'} level={2} />
})
const goalsColumn = () => ({
    align: 'center',
    dataIndex: 'goals',
    key: 'goals',
    render: (_, item) => <Text strong label={item.goals} level={3} />,
    sorter: (a, b) => a.goals - b.goals,
    title: <Text strong label={'Goals'} level={2} />
})
const penaltyColumn = () => ({
    align: 'center',
    dataIndex: 'penalty',
    key: 'penalty',
    render: (_, item) => <Text strong label={item.penalty} level={3} />,
    sorter: (a, b) => a.penalty - b.penalty,
    title: <Text strong label={'Penalty'} level={2} />
})
const assistsColumn = () => ({
    align: 'center',
    dataIndex: 'assists',
    key: 'assists',
    render: (_, item) => <Text strong label={item.assists} level={3} />,
    sorter: (a, b) => a.assists - b.assists,
    title: <Text strong label={'Assists'} level={2} />
})

export const getStandingsColumns = onNameClick => [
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

export const getTopScorersColumns = onPlayerNameClick => [
    positionColumn(),
    playerNameColumn(onPlayerNameClick),
    teamNameColumn(),
    goalsColumn(),
    penaltyColumn(),
    assistsColumn()
]
