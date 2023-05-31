import { FC } from 'react';

import { EventItemProps } from './EventItem.props';

const EventItem: FC<EventItemProps> = ({ event }) => (
    <li>
        <div>Home: {event.homeTeam?.name}</div>
        <div>Away: {event.awayTeam?.name}</div>
        <div>{event.date.toDateString()}</div>
        <div>{`score: ${event.score.home} : ${event.score.away}`}</div>
        <div>Win: {event.rates.homeWin}</div>
        <div>Lose: {event.rates.awayWin}</div>
        <div>Draw: {event.rates.draw}</div>
    </li>
);

export default EventItem;