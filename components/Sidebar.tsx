import {Box, List, ListItem, ListIcon, Divider, LinkBox, LinkOverlay} from "@chakra-ui/layout"
import {MdHome, MdLibraryMusic, MdPlaylistAdd, MdFavorite, MdBookmark} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import NextImage from "next/image"
import NextLink from "next/link"
import styles from "../styles/PlayerLaout.module.css"
import {usePlaylist} from "../lib/hooks"

const navMenu = [{
    name: "Profil",
    icon: MdHome,
    route: "/"
}, {
    name: "Rechercher",
    icon: FiSearch,
    route: "#"
}, {
    name: "Bibliothèque",
    icon: MdLibraryMusic,
    route: "#"
}]

const musicMenu = [{
    name: "Créer une playlist",
    icon: MdPlaylistAdd,
    route: "#"
}, {
    name: "Titres likés",
    icon: MdFavorite,
    route: "#"
}, {
    name: "Vos épisodes",
    icon: MdBookmark,
    route: "#"
}]

export default function Sidebar() {
    const {playlists} = usePlaylist()
    return (

        <Box
            width="100%"
            height="calc(100vh - 90px)"
            bg="#000" position="absolute"
            color="gray"
            fontFamily="Helvetica, Arial, sans-serif">


            <Box paddingY="24px">
                {/* LOGO */}
                <Box
                    marginBottom="18px"
                    paddingX="24px">
                    <NextImage
                        src="/logo.svg"
                        height={40}
                        width={131}/>
                </Box>
                {/* NAVIGATION MENU */}
                <Box>
                    <List
                        className={styles.navMenuList}>
                        {navMenu.map((menu) => (
                            <ListItem
                                key={menu.name}
                                className={styles.navMenuListItem}>
                                <LinkBox className={styles.navMenuLinkBox}>
                                    <NextLink
                                        href={menu.route}
                                        passHref
                                    >
                                        <LinkOverlay className={styles.navMenuLinkOverlay}>
                                            <ListIcon
                                                as={menu.icon}
                                                className={styles.navMenuListIcon}
                                            />
                                            <span>{menu.name}</span>
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* MUSIC & PLAYLISTS */}
                <Box
                    marginTop="24px"
                    className={styles.musicMenuList}>
                    {/* MUSIC MENU */}
                    {/* TODO USE ICON BUTTON INSTEAD */}
                    <Box>
                        <List >
                            {musicMenu.map((menu) => (
                                <ListItem key={menu.name} className={styles.musicMenuListItem}>
                                    <LinkBox className={styles.musicMenuLinkBox}>
                                        <NextLink href={menu.route} passHref>
                                            <LinkOverlay className={styles.musicMenuLinkOverlay}>
                                                <ListIcon as={menu.icon} className={styles.musicMenuListIcon}/>
                                                <span>{menu.name}</span>
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box marginTop="8px" paddingX="24px">
                        <Divider color="#282828"/>
                    </Box>

                    {/* PLAYLISTS */}
                    <Box height="calc(100% - 129px)" overflowY="auto" paddingY="8px">
                        <List>
                            {playlists.map((playlist) => (
                                <ListItem key={playlist.id} className={styles.playlistListItem}>
                                    <Box paddingX="24px" height="100%">
                                        <LinkBox className={styles.playlistLinkBox}>
                                            <NextLink href={{
                                                pathname: "/playlist/[id]",
                                                query: {id: playlist.id}
                                            }} passHref>
                                                <LinkOverlay className={styles.playlistLinkOverlay}>
                                                    <span>{playlist.name}</span>
                                                </LinkOverlay>
                                            </NextLink>
                                        </LinkBox>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}