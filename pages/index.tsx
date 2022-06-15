import {Box, Flex, Text} from '@chakra-ui/layout'
import prisma from "../lib/prisma";
import {useMe} from "../lib/hooks";
import GradientLayout from "../components/GradientLayout";
import ArtistCard from "../components/ArtistCard";
import SongCard from "../components/SongCard";

const image = "https://media.fashionnetwork.com/m/4a47/a367/840d/0877/429b/e8e3/2827/582e/0f41/a5c0/a5c0.jpg"

export default function Home({artists}) {
    const {user} = useMe()

    return (
        <GradientLayout
            image={image}
            roundImage
            color="orange"
            subtitle="profil"
            title={`${user?.firstName} ${user?.lastName}`}
            description={`${user?.playlistCount} playlist(s) publique(s) • 3 abonnés • 36 abonnés`}
        >
            <Box color="white" paddingX="16px">
                <Flex align="center" padding="24px 0">
                    <Text fontSize="20px" color="#a7a7a7" letterSpacing="-1px">• • •</Text>
                </Flex>
                <Box marginBottom="16px">
                    <Text fontSize="24px" lineHeight="1.75rem" fontWeight="bold">Top artistes du mois</Text>
                    <Text color="#a7a7a7" fontSize="14px">Visibles uniquement par vous</Text>
                </Box>
                <Flex  overflowX="auto"> {artists.map(artist => (
                    <ArtistCard key={artist.id} artist={artist}/>
                ))}
                </Flex>
                <Box marginTop="40px" >
                    <Text fontSize="24px" lineHeight="1.75rem" fontWeight="bold">Top titres du mois</Text>
                    <Text marginBottom="16px" color="#a7a7a7" fontSize="14px">Visibles uniquement par vous</Text>
                    {new Array(4).fill(1).map((_, index) => (
                        <SongCard
                            number={index + 1}
                            image={image}
                            title="Titre"
                            artist="Artiste"
                            album={"Nom de l'album"}
                            date="15 avr. 2022"
                            duration="3:28"
                        />
                    ))}
                </Box>
            </Box>
        </GradientLayout>
    )
}

export const getServerSideProps = async () => {
    const artists = await prisma.artist.findMany({})

    return {
        props: {artists}
    }
}
