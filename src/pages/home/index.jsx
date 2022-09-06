import React, { useEffect, useState } from 'react'
import { get, isEmpty, orderBy } from 'lodash'

import { getLeagues, getSeasonStandings, getSeasons, getTopScorers } from 'state/axios'
import PropTypes from 'prop-types'
import Select from 'components/select'
import StandingsTable from 'containers/standings-table'
import TeamLayout from 'containers/team-layout'

const FIRST_ELEMENT = 0

const Home = ({ apiKey }) => {
    const [leagueData, setLeagueData] = useState([])
    const [leagueOptions, setLeagueOptions] = useState([])
    const [selectedLeague, setSelectedLeague] = useState(null)
    const [seasonData, setSeasonData] = useState([])
    const [seasonOptions, setSeasonOptions] = useState([])
    const [selectedSeason, setSelectedSeason] = useState(null)
    const [standingsData, setStandingsData] = useState([])
    const [topScorersData, setTopScorersData] = useState({})
    const [selectedTeam, setSelectedTeam] = useState(null)

    useEffect(() => {
        getLeagues(apiKey, setLeagueData)
        getSeasons(apiKey, setSeasonData)
    }, [])

    useEffect(() => {
        setLeagueOptions(leagueData.map(league => ({ key: `${league.id}`, label: league.name })))
    }, [leagueData])

    useEffect(() => {
        if (isEmpty(selectedLeague)) {
            setSeasonOptions([])
        } else {
            setSeasonOptions(
                orderBy(get(seasonData, selectedLeague, []), 'id', 'desc').map(season => ({
                    key: `${season.id}`,
                    label: season.name
                }))
            )
        }
    }, [selectedLeague])

    useEffect(() => {
        if (isEmpty(seasonOptions)) {
            setSelectedSeason(null)
        } else {
            setSelectedSeason(`${seasonOptions[FIRST_ELEMENT].key}` || null)
        }
    }, [seasonOptions])

    useEffect(() => {
        if (isEmpty(selectedSeason)) {
            setStandingsData([])
            setTopScorersData({})
        } else {
            getSeasonStandings(apiKey, setStandingsData, selectedSeason)
            getTopScorers(apiKey, setTopScorersData, selectedSeason)
        }
    }, [selectedSeason])

    return (
        <div className="App">
            {selectedTeam ? (
                <>
                    <TeamLayout apiKey={apiKey} onButtonClick={() => setSelectedTeam(null)} teamId={selectedTeam} />
                </>
            ) : (
                <>
                    <Select
                        options={leagueOptions}
                        showSearch
                        value={selectedLeague}
                        onChange={setSelectedLeague}
                        placeholder={'Please select a league.'}
                    />
                    <Select
                        disabled={isEmpty(selectedLeague) || isEmpty(seasonOptions)}
                        placeholder={'Please select a league first in order to select a season.'}
                        options={seasonOptions}
                        value={selectedSeason}
                        onChange={setSelectedSeason}
                    />
                    <StandingsTable
                        standingsData={standingsData}
                        topScorersData={topScorersData}
                        handleNameClick={setSelectedTeam}
                    />
                </>
            )}
        </div>
    )
}
Home.propTypes = {
    apiKey: PropTypes.string
}
export default Home
