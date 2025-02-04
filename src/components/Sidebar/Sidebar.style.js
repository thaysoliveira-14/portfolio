import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 36px;
    display: flex;
    flex-direction: column;
`
export const SidebarLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    padding-bottom: 8px;
    transition: 0.3s;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
        transform: scale(1.1);
    }
`



