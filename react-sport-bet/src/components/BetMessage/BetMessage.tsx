import { FC } from 'react';
import { BetMessageProps } from './BetMessage.props';
import { useAppDispatch } from '@/app/hooks';
import { clearCurrent } from '@/app/betSlice';
import { CloseButton, MessageText, MessageWrapper } from './BetMessage.styles';

const BetMessage: FC<BetMessageProps> = ({ bet }) => {
    const { event } = bet;
    const dispatch = useAppDispatch();
    const result = bet.option === 'ничью' ? 'ничью' : `${bet.option}`;
    return (
        <MessageWrapper>
            <MessageText>
                Спасибо за Вашу ставку на матч {event?.homeTeam?.name} против{' '}
                {event?.awayTeam?.name}, ваша ставка на - {result}, СУММА СТАВКИ = {bet.value}{' '}
                BYN и она успешно принята.
            </MessageText>
            <CloseButton type='button' onClick={() => dispatch(clearCurrent())} />
        </MessageWrapper>
    );
};

export default BetMessage;