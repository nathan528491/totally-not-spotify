import {Box, Flex, Text} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/react"
import {FiHeart} from "react-icons/fi"
import {useStoreState} from "easy-peasy"
import Player from "./Player"

export default function PlayerBar() {
    const image = "https://media.fashionnetwork.com/m/4a47/a367/840d/0877/429b/e8e3/2827/582e/0f41/a5c0/a5c0.jpg"
    const songs = useStoreState((state: any) => state.activeSongs)
    const activeSong = useStoreState((state: any) => state.activeSong)

    return (
        <Box width="100%" height="100%">
            <Flex justify="center" align="center" height="100%" paddingX="16px">
                <Box width="30%">
                    {activeSong ? (
                        <Flex height="100%" align="center">
                            <Image src={image} height="56px"/>
                            <Flex justify="center" color="white" direction="column" marginX="16px">
                                <Text paddingRight="12px" height="18px" fontSize="14px" lineHeight="1rem">{activeSong.name}</Text>
                                <Text paddingRight="12px" height="16px" color="#6a6a6a" fontSize="11px" lineHeight="1rem">{activeSong.artist.name}</Text>
                            </Flex>
                            <Box color="rgba(255,255,255,0.7)" _hover={{color: "rgba(255,255,255,1)"}}>
                                <FiHeart  />
                            </Box>
                        </Flex>
                    ): null}
                </Box>
                <Box width="40%" textAlign="center" height="56px">
                    {activeSong ? (
                        <Player songs={songs} activeSong={activeSong} />
                    ): null}
                </Box>
                <Box width="30%" textAlign="center" >three</Box>
            </Flex>
        </Box>
    )
}