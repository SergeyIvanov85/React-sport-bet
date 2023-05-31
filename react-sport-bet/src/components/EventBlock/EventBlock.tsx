import { FC } from "react";

import EventList from "@/components/EventList/EventList";
import { EventBlockProps } from "./EventBlock.props";
import { StyledEvents } from "./EventBlock.styles";

const EventBlock: FC<EventBlockProps> = ({ heading, events }) => (
    <StyledEvents>
        <h2>{ heading }</h2>
        <EventList events={events} />
    </StyledEvents>
);

export default EventBlock;