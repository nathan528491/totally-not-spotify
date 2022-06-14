import {validateToken} from "../../lib/auth";
import prisma from "../../lib/prisma";
import GradientLayout from "../../components/GradientLayout";
import SongsTable from "../../components/SongsTable";

const getBGColor = (id) => {
    const colors = [
        'red',
        'green',
        'blue',
        'orange',
        'purple',
        'gray',
        'teal',
        'yellow',
    ]

    return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)]
}

const image = "https://media.fashionnetwork.com/m/4a47/a367/840d/0877/429b/e8e3/2827/582e/0f41/a5c0/a5c0.jpg"

export default function Playlist({playlist}) {
    const color = getBGColor(playlist.id)
    return (
        <GradientLayout
            color={color}
            image={image}
            roundImage={false}
            title={playlist.name}
            subtitle="playlist"
            description={`${playlist.songs.length} titre(s)`}
        >
            <SongsTable/>
        </GradientLayout>
    )

}


export const getServerSideProps = async ({query, req}) => {
    const {id} = validateToken(req.cookies.ACCESS_TOKEN)
    // @ts-ignore
    const [playlist] = await prisma.playlist.findMany({
        where: {
            id: +query.id,
            userId: id
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            name: true,
                            id: true
                        }
                    }
                }
            }
        }
    })
    return {
        props: {playlist}
    }
}