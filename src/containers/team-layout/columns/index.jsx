import React from 'react'
import Text from 'components/text'

const ONE = 1

const numberColumn = () => ({
    align: 'center',
    dataIndex: 'number',
    key: 'number',
    render: (_, item) => <Text strong label={item.number} level={3} />,
    sorter: (a, b) => (a.number === '' ? ONE : a.number - b.number),
    title: <Text strong label={'Number'} level={2} />
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

const appearencesColumn = () => ({
    align: 'center',
    dataIndex: 'appearences',
    key: 'appearences',
    render: (_, item) => <Text strong label={item.appearences} level={3} />,
    sorter: (a, b) => a.appearences - b.appearences,
    title: <Text strong label={'Appearences'} level={2} />
})

const goalsColumn = () => ({
    align: 'center',
    dataIndex: 'goals',
    key: 'goals',
    render: (_, item) => <Text strong label={item.goals} level={3} />,
    sorter: (a, b) => a.goals - b.goals,
    title: <Text strong label={'Goals'} level={2} />
})

const assistsColumn = () => ({
    align: 'center',
    dataIndex: 'assists',
    key: 'assists',
    render: (_, item) => <Text strong label={item.assists} level={3} />,
    sorter: (a, b) => a.assists - b.assists,
    title: <Text strong label={'Assists'} level={2} />
})

const ratingColumn = () => ({
    align: 'center',
    dataIndex: 'rating',
    key: 'rating',
    render: (_, item) => <Text strong label={item.rating} level={3} />,
    sorter: (a, b) => a.rating - b.rating,
    title: <Text strong label={'Rating'} level={2} />
})

export const getTeamPlayerColumns = onPlayerClick => [
    numberColumn(),
    playerNameColumn(onPlayerClick),
    appearencesColumn(),
    goalsColumn(),
    assistsColumn(),
    ratingColumn()
]
