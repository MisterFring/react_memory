import React from 'react'
import PropTypes from 'prop-types'
import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
    <tr>
        <td className="date">Date</td>
        <td className="guesses">Essais</td>
        <td className="player">Joueur</td>
    </tr>
      {entries.map(({id, guesses, date, player}) => (
          <tr key={id}>
              <td className="date">{date}</td>
              <td className="guesses">{guesses}</td>
              <td className="player">{player}</td>
          </tr>
      ))}
    </tbody>
  </table>
)

HallOfFame.propTypes = {
    entries : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            date : PropTypes.string.isRequired,
            guesses :PropTypes.number.isRequired,
            player : PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/03/2020', player: 'Pierre' },
  { id: 2, guesses: 23, date: '11/10/2019', player: 'Anthony' },
  { id: 1, guesses: 31, date: '06/10/2019', player: 'Pierre' },
  { id: 0, guesses: 48, date: '14/03/2020', player: 'Arthur' },
]