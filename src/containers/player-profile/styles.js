import styled from 'styled-components'

export const StyledContextContainer = styled.div`
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

export const StyledContext = styled.div`
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

export const StyledContextGrid = styled.div`
    display: flex;
    height: calc(100% - 54px);
    grid-column-gap: 16px;
`

export const StyledLeftContent = styled.div`
    height: 100%;
    width: 40%;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledRightContent = styled.div`
    height: 100%;
    width: 60%;
`

export const StyledTitle = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 36px;
    padding: 0 8px;
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    padding: 16px;
`

/* istanbul ignore next */
export const StyledContextItem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
`

export const StyledContextButton = styled.div`
    align-self: center;
    justify-self: center;
`
