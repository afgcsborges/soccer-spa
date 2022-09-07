/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import DisplayBox from 'components/display-box'
import Image from 'components/image'
import PropTypes from 'prop-types'
import Space from 'components/space'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

const StyledSpace = styled(Space)`
    float: left;
    align-items: center;
    padding: 8px;
`

const mapTeamInfo = teamData => {
    console.log(teamData)

    return {
        country: teamData.country.data.name,
        name: teamData.name,
        shortCode: teamData.short_code,
        venueAddress: teamData.venue.data.address,
        venueCapacity: teamData.venue.data.capacity,
        venueName: teamData.venue.data.name,
        venueSurface: teamData.venue.data.surface,
        yearFounded: teamData.founded
    }
}

const TeamInformation = ({ apiKey, teamData }) => {
    const [teamLogo, setTeamLogo] = useState('')
    const [teamInfo, setTeamInfo] = useState({})
    const [venueImage, setVenueImage] = useState('')

    useEffect(() => {
        if (isEmpty(teamData)) {
            setTeamLogo('')
            setTeamInfo({})
            setVenueImage('')
        } else {
            setTeamLogo(teamData.logo_path)
            setTeamInfo(mapTeamInfo(teamData))
            setVenueImage(teamData.venue.data.image_path)
        }
    }, [teamData])

    return (
        <StyledSpace direction={'horizontal'}>
            <Image src={teamLogo} />
            <StyledSpace direction={'vertical'}>
                <DisplayBox label={'Team Name:'} value={teamInfo.name} minWidth={'100px'} textAlign="start" />
                <DisplayBox label={'Short Code:'} value={teamInfo.shortCode} minWidth={'100px'} textAlign="start" />
                <DisplayBox label={'Country:'} value={teamInfo.country} minWidth={'100px'} textAlign="start" />
                <DisplayBox label={'Year Founded:'} value={teamInfo.yearFounded} minWidth={'100px'} textAlign="start" />
            </StyledSpace>
            <Image src={venueImage} />
            <StyledSpace direction={'vertical'}>
                <DisplayBox label={'Stadium:'} value={teamInfo.venueName} minWidth={'100px'} />
                <DisplayBox label={'Capacity:'} value={teamInfo.venueCapacity} minWidth={'100px'} />
                <DisplayBox label={'Address:'} value={teamInfo.venueAddress} minWidth={'100px'} />
                <DisplayBox label={'Surface:'} value={teamInfo.venueSurface} minWidth={'100px'} />
            </StyledSpace>
        </StyledSpace>
    )
}

TeamInformation.propTypes = {
    apiKey: PropTypes.string,
    teamData: PropTypes.object
}
export default TeamInformation
