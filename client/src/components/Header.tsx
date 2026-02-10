import { Flex, Image, Link as LinkCha, Button } from "@chakra-ui/react"

import NotifIcon from '../assets/imgs/notification.png'

export type IHeaderProps = unknown

const Header: React.FC<IHeaderProps> = () => {
    return (
        <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <nav>
                <Flex flexDir={"row"} justifyContent={"start"} alignItems={"center"} gap={2}
                ps={"10px"}>
                    <LinkCha href="/home">
                        Acceuil
                    </LinkCha>
                    <LinkCha href="">
                        autre
                    </LinkCha>
                    <LinkCha href="">
                        autre
                    </LinkCha>
                    <LinkCha href="">
                        autre
                    </LinkCha>
                </Flex>
            </nav>
            <Flex id="connexion"
            flexDir={"row"} justifyContent={"end"} alignItems={"center"}>
                <Button bg={"transparent"}>
                    <Image src={NotifIcon} h={"24px"} w={"24px"}/>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header