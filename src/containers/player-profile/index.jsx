import React, { useEffect, useState } from 'react'
import {
    StyledContent,
    StyledPlayerImage,
    StyledPlayerProfile,
    StyledPlayerProfileContainer,
    StyledPlayerProfileGrid,
    StyledSpace
} from './styles'
import { get, isEmpty } from 'lodash'

import Button from 'components/button'
import DisplayBox from 'components/display-box'
import Image from 'components/image'
import PropTypes from 'prop-types'
import Text from 'components/text'
import { getPlayerInfo } from 'state/axios'

const PlayerProfile = ({ apiKey, onClose, playerId }) => {
    const [playerInfo, setPlayerInfo] = useState({})
    const [playerImage, setPlayerImage] = useState('')

    useEffect(() => {
        getPlayerInfo(apiKey, setPlayerInfo, playerId)
    }, [])

    useEffect(() => {
        if (isEmpty(playerInfo)) {
            setPlayerImage('')
        } else {
            setPlayerImage(playerInfo.image_path)
        }
    }, [playerInfo])

    return (
        <StyledPlayerProfileContainer>
            <StyledPlayerProfile>
                <StyledContent>
                    <Text label={'Player Profile'} level={1} strong />
                    <></>
                    <StyledPlayerProfileGrid>
                        <StyledPlayerImage>
                            <Image src={playerImage} width={'100%'} />
                        </StyledPlayerImage>
                        <StyledSpace direction="vertical">
                            <Button size="large" type="link" color="error" label={'Close'} onClick={onClose} />
                            <DisplayBox
                                label={'First Name:'}
                                value={get(playerInfo, 'firstname') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Last Name:'}
                                value={get(playerInfo, 'lastname') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Nationality:'}
                                value={get(playerInfo, 'nationality') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Team:'}
                                value={get(playerInfo, 'team.data.name') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Birthdate:'}
                                value={get(playerInfo, 'birthdate') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Position:'}
                                value={get(playerInfo, 'position.data.name') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Height:'}
                                value={get(playerInfo, 'height') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                            <DisplayBox
                                label={'Weight:'}
                                value={get(playerInfo, 'weight') || '-'}
                                minWidth={'100px'}
                                textAlign="start"
                            />
                        </StyledSpace>
                    </StyledPlayerProfileGrid>
                </StyledContent>
            </StyledPlayerProfile>
        </StyledPlayerProfileContainer>
    )
}

PlayerProfile.propTypes = {
    apiKey: PropTypes.string,
    onClose: PropTypes.func,
    playerId: PropTypes.number
}

export default PlayerProfile
