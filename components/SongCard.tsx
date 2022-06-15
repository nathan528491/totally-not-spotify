import {Flex, Text} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react";

export default function SongCard({
    number,
    image,
    title,
    artist,
    album,
    date,
    duration,
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
        >
            <Text flexBasis="16px" flexShrink="0" alignSelf="center" fontSize="1rem">{number}</Text>
            <Flex flexBasis="100px" flexGrow="2" flexShrink="0" maxWidth="500px" align="center">
                <Image src={image} height="40px" marginRight="16px" flexGrow="0" flexShrink="0"/>
                <Flex direction="column" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    <Text fontSize="1rem" lineHeight="1.5rem">{title}</Text>
                    <Text fontSize="1rem" lineHeight="1.5rem" color="#b3b3b3">{artist}</Text>
                </Flex>
            </Flex>

            <Text fontSize="0.875rem" lineHeight="1rem" flexBasis="100px" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden"  flexGrow="1" flexShrink="0">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {album}
            </Text>
            <Text fontSize="0.875rem" lineHeight="1rem" flexBasis="100px" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden"
                flexGrow="1" flexShrink="0" color="#b3b3b3">{date}</Text>
            <Text fontSize="0.875rem" lineHeight="1rem" textAlign="center" flexBasis="30px" flexShrink="0" color="#b3b3b3">{duration}</Text>
        </Flex>
    )
}