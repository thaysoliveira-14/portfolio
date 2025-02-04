import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 80px;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    width: 360px;
`

export const NavbarLinks = styled.a`
    color: ${(props) => props.theme.colors.text};
    transition: 0.2s;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
        transform: scale(1.1);
        cursor: pointer;
    }
`