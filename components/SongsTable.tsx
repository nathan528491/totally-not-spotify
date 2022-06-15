import {Flex, Text} from "@chakra-ui/layout"
import {Icon} from '@chakra-ui/react'
import {GrPlayFill} from "react-icons/gr";
import {BiTimeFive} from "react-icons/bi";
import SongCard from "./SongCard";


const image = "https://media.fashionnetwork.com/m/4a47/a367/840d/0877/429b/e8e3/2827/582e/0f41/a5c0/a5c0.jpg"
const songs = new Array(10)

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
            <Flex direction="column" paddingX="32px">
                {/* LÉGENDE */}
                <Flex
                    paddingX="16px"
                    align="center"
                    columnGap="16px"
                    color="#b3b3b3"
                    fontSize="0.75rem"
                    letterSpacing="0.1rem"
                    height="36px"
                    marginBottom="16px"
                    borderBottom="1px solid rgba(255,255,255,0.1)"
                >
                    <Text fontSize="1rem" flexBasis="16px" flexShrink="0" textAlign="center" casing="uppercase">#</Text>
                    <Text flexBasis="100px" flexGrow="2" flexShrink="0" maxWidth="500px" casing="uppercase">Titre</Text>
                    <Text flexBasis="100px" flexGrow="1" flexShrink="0" whiteSpace="nowrap" textOverflow="ellipsis"
                        overflow="hidden" casing="uppercase">Album</Text>
                    <Text flexBasis="100px" flexGrow="1" flexShrink="0" whiteSpace="nowrap" textOverflow="ellipsis"
                        overflow="hidden"
                        casing="uppercase">Ajouté Le</Text>
                    <Icon height="18px" flexBasis="30px" as={BiTimeFive}/>
                </Flex>
                {/* SONGS */}
                <Flex direction="column" color="white">

                    {songs.fill(1).map(() => (
                        <SongCard
                            number={1}
                            image={image}
                            title="Song Name"
                            artist="Artist"
                            album={"Nom de l'album"}
                            date="15 avr. 2022"
                            duration="3:28"
                        />
                    ))}

                </Flex>
            </Flex>
        </Flex>
    )
}