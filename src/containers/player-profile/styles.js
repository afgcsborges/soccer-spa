import Space from 'components/space'
import styled from 'styled-components'

export const StyledPlayerProfileContainer = styled.div`
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    backdrop-filter: blur(1px);
`

export const StyledPlayerProfile = styled.div`
    position: fixed;
    z-index: 1000;
    left: 46px;
    top: 46px;
    width: calc(100% - 92px);
    height: calc(100% - 130px);
    overflow: hidden;
    display: flex;
    align-items: center;
    backdrop-filter: blur(2px);

    @media (max-height: 500px) {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    padding: 16px;
`

export const StyledSpace = styled(Space)`
    height: 100%;
    width: 60% !important;
`

export const StyledPlayerProfileGrid = styled.div`
    display: flex;
    height: calc(100% - 54px);
    grid-column-gap: 16px;
`

export const StyledPlayerImage = styled.div`
    height: 100%;
    width: 40%;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
`
