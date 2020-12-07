import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    position: static;
    background-color: #0000aa;
    flex-grow: 1;
`;

export const StyledNavLink = styled(NavLink)`
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
    color: #ffffff;
    :hover {
        color: #cccccc;
    }
    flex-grow: 1;
`;
