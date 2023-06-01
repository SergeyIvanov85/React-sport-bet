import { Outlet } from 'react-router-dom';

import {
    AppHeader,
    AppMain,
    DefaultWrapper,
    LogoImage,
    RootLink
} from './AppLayout.styles';

const AppLayout = () => (
    <>
        <AppHeader>
            <DefaultWrapper>
                <RootLink to='/'>
                    <LogoImage />
                </RootLink>
                <h1>СПОРТ БЕТ</h1>
            </DefaultWrapper>
        </AppHeader>
        <AppMain>
            <DefaultWrapper>
                <Outlet />
            </DefaultWrapper>
        </AppMain>
    </>
);

export default AppLayout;