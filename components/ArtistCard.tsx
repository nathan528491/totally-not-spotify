import {Box, Flex, Text, } from "@chakra-ui/layout"
import {Image} from "@chakra-ui/react"

const image = "https://media.fashionnetwork.com/m/4a47/a367/840d/0877/429b/e8e3/2827/582e/0f41/a5c0/a5c0.jpg"

export default function ArtistCard({artist}) {
    return (
        <Flex
            key={artist.id}
            direction="column"
            align="start"
            padding="1rem"
            basis="175px"
            shrink="0"
            bg="#181818"
            borderRadius="6px"
            transition="background-color 0.3s ease"
            transitionDuration="200ms"
            _hover={{bg: "#282828"}}
        >
            <Image
                borderRadius="100%"
                src={image}
                outline="solid 1px #000"
                marginBottom="16px"
                boxShadow="2xl"
            />
            <Box minHeight="62px">
                <Text fontSize="1rem" fontWeight="bold">{artist.name}</Text>
                <Text fontSize="14px" color="#a7a7a7">Artiste</Text>
            </Box>
        </Flex>
    )
}
