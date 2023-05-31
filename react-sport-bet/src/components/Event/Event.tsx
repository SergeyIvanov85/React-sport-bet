import { FC } from 'react';

import { EventProps } from './Event.props';

const Event: FC<EventProps> = ({ event }) => (
    <div>
        <div>Home: {event.homeTeam?.name}
            <img src={event.homeTeam?.imageUrl} />
        </div>
        <div>Away: {event.awayTeam?.name}
            <img src={event.awayTeam?.imageUrl} />
        </div>
        <div>{event.date.toDateString()}</div>
        <div>{`score: ${event.score.home} : ${event.score.away}`}</div>
        <div>Win: {event.rates.homeWin}</div>
        <div>Lose: {event.rates.awayWin}</div>
        <div>Draw: {event.rates.draw}</div>
    </div>
)

export default Event;