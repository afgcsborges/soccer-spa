/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Button from 'components/button'
import PropTypes from 'prop-types'
import Table from 'components/table'
import Text from 'components/text'

const getTeamPlayerColumns = () => []
const getTeamPlayers = () => []


const TeamLayout = ({ teamId, onButtonClick }) => {
    const getTableHeader = () => (
                <Button
                    label={'Back to standings'}
                    onClick={onButtonClick}
                />
    )
    
    return <Table
            columns={getTeamPlayerColumns()}
            dataSource={getTeamPlayers()}
            emptyText="No results to show."
            rowKey={'key'}
            header={getTableHeader}
            footer={() => ''}
        />
    
}

TeamLayout.propTypes = {
    onButtonClick: PropTypes.func,
    teamId: PropTypes.string
}
export default TeamLayout
