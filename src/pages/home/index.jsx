/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { get, groupBy, isEmpty, orderBy } from 'lodash'

import PropTypes from 'prop-types'
import Select from 'components/select'
import axios from 'axios'
import logo from '../../logo.svg'

const FIRST_ELEMENT = 0

const Home = ({ apiKey }) => {
    const [leagueData, setLeagueData] = useState([])
    const [leagueOptions, setLeagueOptions] = useState([])
    const [selectedLeague, setSelectedLeague] = useState({})
    const [seasonData, setSeasonData] = useState([])
    const [seasonOptions, setSeasonOptions] = useState([])
    const [selectedSeason, setSelectedSeason] = useState({})

    console.log(selectedSeason)

    useEffect(() => {
        axios
            .get('https://soccer.sportmonks.com/api/v2.0/leagues', { params: { api_token: apiKey } })
            .then(res => setLeagueData(res.data.data))
            .catch(err => {
                console.log(err.message)
            })
        axios
            .get('https://soccer.sportmonks.com/api/v2.0/seasons', { params: { api_token: apiKey } })
            .then(res => setSeasonData(groupBy(res.data.data, 'league_id')))
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    useEffect(() => {
        setLeagueOptions(leagueData.map(league => ({ key: league.id, label: league.name })))
    }, [leagueData])

    useEffect(() => {
        if (isEmpty(selectedLeague)) {
            setSeasonOptions([])
        } else {
            setSeasonOptions(
                orderBy(get(seasonData, selectedLeague, []), 'id', 'desc').map(season => ({
                    key: season.id,
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

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Select options={leagueOptions} showSearch onChange={setSelectedLeague} placeholder={'Please select a league.'}/>
                    <Select
                        disabled={isEmpty(selectedLeague) || isEmpty(seasonOptions)}
                        placeholder={'Please select a league first in order to select a season.'}
                        options={seasonOptions}
                        value={selectedSeason}
                        onChange={setSelectedSeason}
                    />
            </header>
        </div>
    )
}
Home.propTypes = {
    apiKey: PropTypes.string
}
export default Home
