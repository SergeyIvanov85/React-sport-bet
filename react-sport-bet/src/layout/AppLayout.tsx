import { Outlet } from 'react-router-dom';

import { AppHeader, AppMain, LogoImage, RootLink } from './AppLayout.styles';

const AppLayout = () => (
    <>
        <AppHeader>
            <RootLink to='/'>
                <LogoImage />
            </RootLink>
            <h1>СПОРТ БЕТ</h1>
        </AppHeader>
        <AppMain>
            <Outlet />
        </AppMain>
    </>
);

export default AppLayout;