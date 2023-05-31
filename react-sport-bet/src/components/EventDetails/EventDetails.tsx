import { useNavigate, useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>Event {id}</h2>
        </>
    );
};

export default EventDetails;