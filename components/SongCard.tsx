import {Flex, Text} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/react"
import {formatTime, formatDate} from "../lib/formatters"

export default function SongCard({
    number,
    song,
    image,
    album,
    onClick
}) {
    return (
        <Flex
            paddingX="16px"
            columnGap="16px"
            borderRadius="4px"
            height="56px"
            align="center"
            _hover={{
                backgroundColor: "rgba(255,255,255,.1)",
            }}
            onClick={onClick}
        >
            <Text flexBasis="16px" flexShrink="0" alignSelf="center" fontSize="1rem">{number}</Text>
            <Flex flexBasis="100px" flexGrow="2" flexShrink="1" maxWidth="500px" align="center">
                <Image src={image} height="40px" marginRight="16px" flexGrow="0" flexShrink="0"/>
                <Flex flexShrink="1" direction="column" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    <Text fontSize="1rem" lineHeight="1.5rem">{song.name}</Text>
                    <Text fontSize="0.875rem" lineHeight="1rem" color="#b3b3b3">{song.artist.name}</Text>
                </Flex>
            </Flex>

            <Text fontSize="0.875rem" lineHeight="1rem" flexBasis="100px" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden"  flexGrow="1" flexShrink="0">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {album}
            </Text>
            <Text fontSize="0.875rem" lineHeight="1rem" flexBasis="100px" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden"
                flexGrow="1" flexShrink="0" color="#b3b3b3">{formatDate(song.createdAt)}</Text>
            <Text fontSize="0.875rem" lineHeight="1rem" textAlign="center" flexBasis="30px" flexShrink="0" color="#b3b3b3">{formatTime(song.duration)}</Text>
        </Flex>
    )
}