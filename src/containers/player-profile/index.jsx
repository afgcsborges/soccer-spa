import {
    StyledContent,
    StyledContext,
    StyledContextButton,
    StyledContextContainer,
    StyledContextGrid,
    StyledLeftContent,
    StyledRightContent,
    StyledTitle
} from './styles'

import Button from 'components/button'
import PropTypes from 'prop-types'
import React from 'react'
import Text from 'components/text'

// eslint-disable-next-line max-lines-per-function
const PlayerProfile = ({ onClose, playerId }) => {
    console.log(playerId)

    return (
        <StyledContextContainer>
            <StyledContext data-test={`core_context`}>
                <StyledContent>
                    <>
                        <StyledTitle>
                            <Text label={'labels.DEFAULT_CONTEXT'} />
                        </StyledTitle>
                        <></>
                        <StyledContextGrid>
                            <StyledLeftContent></StyledLeftContent>
                            <StyledRightContent>
                                <StyledContextButton>
                                    <Button
                                        dataTest="core_context-button"
                                        size="large"
                                        type="link"
                                        color="error"
                                        label={'Close'}
                                        onClick={onClose}
                                    />
                                </StyledContextButton>
                            </StyledRightContent>
                        </StyledContextGrid>
                    </>
                </StyledContent>
            </StyledContext>
        </StyledContextContainer>
    )
}

PlayerProfile.propTypes = {
    onClose: PropTypes.func,
    playerId: PropTypes.string
}

export default PlayerProfile
