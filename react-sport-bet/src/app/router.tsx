import {createBrowserRouter, Navigate} from 'react-router-dom';

import AppLayout from '@/layout/AppLayout';
import HomePage from '@/pages/HomePage';
import EventDetailsPage from '@/pages/EventDetailsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/events' />
    },
    {
        path: 'events/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: ':id',
                element: <EventDetailsPage />
            }
        ]
    }
]);