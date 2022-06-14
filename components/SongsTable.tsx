import {Flex, Text} from "@chakra-ui/layout"
import {Icon} from '@chakra-ui/react'
import {GrPlayFill} from "react-icons/gr";
import {BiTimeFive} from "react-icons/bi";


export default function SongsTable() {
    return (
        <Flex direction="column" maxWidth="1889px">
            <Flex color="white" padding="24px 32px" align="center">
                <Flex
                    justify="center"
                    align="center"
                    padding="14px"
                    bg="#1ed760"
                    borderRadius="100%"
                    width="56px"
                    height="56px"
                    marginRight="32px"
                >
                    <Icon width="20px" height="18px" as={GrPlayFill}/>
                </Flex>

                <Text fontSize="20px" color="#a7a7a7" letterSpacing="-1px">• • •</Text>
            </Flex>
            {/* SONGS TABLE TODO : # | TITRE | ALBUM | AJOUTÉ LE | TIME */}
            <Flex direction="column" paddingX="32px" >
                {/* LÉGENDE */}
                <Flex
                    paddingX="16px"
                    align="center"
                    columnGap="16px"
                    color="#b3b3b3"
                    fontSize="0.75rem"
                    letterSpacing="0.1rem"
                    height="36px"
                    borderBottom="1px solid rgba(255,255,255,0.1)"
                >
                    <Text fontSize="1rem" flexBasis="16px" flexShrink="0" textAlign="center" casing="uppercase">#</Text>
                    <Text flexBasis="100px" flexGrow="2" maxWidth="500px" casing="uppercase">Titre</Text>
                    <Text flexBasis="100px" flexGrow="1" casing="uppercase">Album</Text>
                    <Text flexBasis="100px" whiteSpace="nowrap" textOverflow="ellipsis" flexGrow="1" overflow="hidden" casing="uppercase">Ajouté Le</Text>
                    <Icon textAlign="start" height="18px" flexBasis="100px" as={BiTimeFive} />
                </Flex>
                {/* SONGS */}
                <Flex/>
            </Flex>
        </Flex>
    )
}