import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"
import { SidebarContainer, SidebarLink } from "./Sidebar.style"

export default function Sidebar() {
    return(
        <>
        <SidebarContainer>
            <SidebarLink href="https://github.com/thaysoliveira-14" target="_blank">
                <SiGithub size={30}/>
            </SidebarLink>
            <SidebarLink href="www.linkedin.com/in/thays-oliveira-developer" target="_blank">
                <SiLinkedin size={30}/>
            </SidebarLink>
            <SidebarLink href="https://www.instagram.com/thaysoliveira_14/" target="_blank">
                <SiInstagram size={30}/>
            </SidebarLink>
        </SidebarContainer>
        </>
    )
}