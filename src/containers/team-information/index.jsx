/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import DisplayBox from 'components/display-box'
import Image from 'components/image'
import PropTypes from 'prop-types'
import Space from 'components/space'
import { getVenue } from 'state/axios'
import { isEmpty } from 'lodash'
import styled from 'styled-components'


const StyledSpace = styled(Space)`
    float: left;
    align-items: center;
`

const mapTeamInfo = teamData => {
    console.log(teamData)

    return {
        countryId: teamData.country_id,
        name: teamData.name,
        shortCode: teamData.short_code,
        venueId: teamData.venue_id,
        yearFounded: teamData.founded
    }
}

const TeamInformation = ({ apiKey, teamData }) => {
    const [teamId, setTeamId] = useState(null)
    const [teamLogo, setTeamLogo] = useState('')
    const [teamInfo, setTeamInfo] = useState({})
    const [venue, setVenue] = useState({})
    const [venueImage, setVenueImage] = useState('')
    console.log(venue)

    useEffect(() => {
        if (isEmpty(teamData)) {
            setTeamLogo('')
            setTeamInfo({})
        } else {
            setTeamLogo(teamData.logo_path)
            setTeamInfo(mapTeamInfo(teamData))
        }
    }, [teamData])

    useEffect(() => {
        if (isEmpty(teamInfo)) {
            setVenueImage('')
        } else {
            getVenue(apiKey, setVenue, teamInfo.venueId)
        }
    }, [teamInfo])

    useEffect(() => {
        if (isEmpty(venue)) {
            setVenueImage('')
        } else {
            setVenueImage(venue.image_path)
        }
    }, [venue])

    return (
        <StyledSpace direction={'horizontal'}>
            <Image src={teamLogo} />
            <StyledSpace direction={'vertical'}>
                <DisplayBox label={'Team Name:'} value={teamInfo.name} minWidth={'100px'} textAlign="start" />
                <DisplayBox label={'Short Code:'} value={teamInfo.shortCode} minWidth={'100px'} textAlign="start" />
                <DisplayBox label={'Country:'} value={teamInfo.countryId} minWidth={'100px'} textAlign="start" />
                <DisplayBox label={'Year Founded:'} value={teamInfo.yearFounded} minWidth={'100px'} textAlign="start" />
            </StyledSpace>
            <Image src={venueImage} />
            <StyledSpace direction={'vertical'}>
                <DisplayBox label={'Name'} value={teamInfo.name} minWidth={'100px'} />
                <DisplayBox label={'Short Code'} value={teamInfo.name} minWidth={'100px'} />
                <DisplayBox label={'Country'} value={teamInfo.name} minWidth={'100px'} />
                <DisplayBox label={'Year Founded'} value={teamInfo.name} minWidth={'100px'} />
            </StyledSpace>
        </StyledSpace>
    )
}

TeamInformation.propTypes = {
    apiKey: PropTypes.string,
    teamData: PropTypes.object
}
export default TeamInformation
