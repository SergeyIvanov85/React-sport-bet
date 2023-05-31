import { Outlet } from 'react-router-dom';

import { AppHeader, AppMain, RootLink } from './AppLayout.styles';

const AppLayout = () => (
    <>
        <RootLink to='/'>
            <AppHeader>
                <h1>СПОРТ БЕТ</h1>
            </AppHeader>
        </RootLink>
        <AppMain>
            <Outlet />
        </AppMain>
    </>
);

export default AppLayout;