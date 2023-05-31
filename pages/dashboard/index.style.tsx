import { styled, useTheme } from '@mui/material/styles';

// const theme = useTheme();

const rightContentWidth = 450

export const MainContent = styled('div')`
    display: flex;
`;

export const Content = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const LeftSection = styled('div')`
    display: flex;
    width: 70%;
    height: 100vh;
    background-color: #efefef;
`

export const RightSection = styled('div')`
    display: flex;
    width: 30%;
    height: 100vh;
`;

export const OpenRegisterSection = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 30%;
    background-color: #83c483;
`;