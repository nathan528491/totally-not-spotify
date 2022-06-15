import {Box, Flex, Text} from "@chakra-ui/layout"
import {Icon, IconButton} from '@chakra-ui/react'
import {BiTimeFive} from "react-icons/bi";
import {MdPlayCircleFilled} from "react-icons/md";
import {useStoreActions} from "easy-peasy";
import SongCard from "./SongCard";

const image = "https://media.fashionnetwork.com/m/4a47/a367/840d/0877/429b/e8e3/2827/582e/0f41/a5c0/a5c0.jpg"

export default function SongsTable({songs}) {
    const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
    const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)

    const handlePlay = (activeSong?) => {
        setActiveSong(activeSong || songs[0])
        playSongs(songs)
    }

    return (
        <Box>
            <Flex direction="column" maxWidth="1889px">
                <Flex color="white" padding="24px 32px" align="center">
                    <IconButton
                        marginRight="32px"
                        aria-label="play"
                        variant="link"
                        color="#1ed760"
                        isRound
                        fontSize="66px"
                        transitionDuration="0ms"
                        icon={<MdPlayCircleFilled/>}
                        onClick={() => handlePlay()}
                    />
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
                        <Text fontSize="1rem" flexBasis="16px" flexShrink="0" textAlign="center"
                            casing="uppercase">#</Text>
                        <Text flexBasis="100px" flexGrow="2" flexShrink="0" maxWidth="500px"
                            casing="uppercase">Titre</Text>
                        <Text flexBasis="100px" flexGrow="1" flexShrink="0" whiteSpace="nowrap" textOverflow="ellipsis"
                            overflow="hidden" casing="uppercase">Album</Text>
                        <Text flexBasis="100px" flexGrow="1" flexShrink="0" whiteSpace="nowrap" textOverflow="ellipsis"
                            overflow="hidden"
                            casing="uppercase">Ajouté Le</Text>
                        <Icon height="18px" flexBasis="30px" as={BiTimeFive}/>
                    </Flex>
                    {/* SONGS */}
                    <Flex direction="column" color="white">

                        {songs.map((song, key) => (
                            <SongCard
                                key={song.id}
                                number={key + 1}
                                song={song}
                                image={image}
                                album={"Nom de l'album"}
                                onClick={() => handlePlay(song)}

                            />

                        ))}

                    </Flex>
                </Flex>
            </Flex>
        </Box>

    )
}