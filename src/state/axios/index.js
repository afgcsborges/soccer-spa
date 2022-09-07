import axios from 'axios'

// eslint-disable-next-line no-console
const logError = err => console.log(err.message)

export const getLeaguesAndSeasons = (apiKey, setLeagueData) => {
    axios
        .get('https://soccer.sportmonks.com/api/v2.0/leagues?include=seasons', { params: { api_token: apiKey } })
        .then(res => setLeagueData(res.data.data))
        .catch(err => {
            logError(err)
        })
}

export const getSeasonStandings = (apiKey, setStandingsData, selectedSeason) => {
    axios
        .get(`https://soccer.sportmonks.com/api/v2.0/standings/season/${selectedSeason}`, {
            params: { api_token: apiKey }
        })
        .then(res => setStandingsData(res.data.data))
        .catch(err => {
            logError(err)
        })
}

export const getTopScorers = (apiKey, setTopScorersData, selectedSeason) => {
    axios
        .get(
            `https://soccer.sportmonks.com/api/v2.0/topscorers/season/${selectedSeason}?include=goalscorers.player.team`,
            {
                params: { api_token: apiKey }
            }
        )
        .then(res => setTopScorersData(res.data.data))
        .catch(err => {
            logError(err)
        })
}

export const getTeamPlayers = (apiKey, setTeamPlayers, selectedTeam) => {
    axios
        .get(`https://soccer.sportmonks.com/api/v2.0/teams/${selectedTeam}?include=squad.player,venue,country`, {
            params: { api_token: apiKey }
        })
        .then(res => setTeamPlayers(res.data.data))
        .catch(err => {
            logError(err)
        })
}

export const getPlayerInfo = (apiKey, setPlayerInfo, playerId) => {
    axios
        .get(`https://soccer.sportmonks.com/api/v2.0/players/${playerId}?include=position,team`, {
            params: { api_token: apiKey }
        })
        .then(res => setPlayerInfo(res.data.data))
        .catch(err => {
            logError(err)
        })
}
