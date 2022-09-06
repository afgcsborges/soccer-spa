import axios from 'axios'
import { groupBy } from 'lodash'

// eslint-disable-next-line no-console
const logError = err => console.log(err.message)

export const getLeagues = (apiKey, setLeagueData) => {
    axios
        .get('https://soccer.sportmonks.com/api/v2.0/leagues', { params: { api_token: apiKey } })
        .then(res => setLeagueData(res.data.data))
        .catch(err => {
            logError(err)
        })
}

export const getSeasons = (apiKey, setSeasonData) => {
    axios
        .get('https://soccer.sportmonks.com/api/v2.0/seasons', { params: { api_token: apiKey } })
        .then(res => setSeasonData(groupBy(res.data.data, 'league_id')))
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
