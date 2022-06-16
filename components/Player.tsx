import {
    Box,
    IconButton,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Center,
    Flex,
    Text
} from "@chakra-ui/react"
import ReactHowler from "react-howler"
import {useEffect, useRef, useState} from "react"
import {MdShuffle, MdSkipPrevious, MdSkipNext, MdPlayCircleFilled, MdPauseCircleFilled, MdRepeat} from "react-icons/md"
import {useStoreActions} from "easy-peasy"
import styles from "../styles/Player.module.css"
import {formatTime} from "../lib/formatters"

export default function Player({songs, activeSong}) {

    // const sliderTrack = document.getElementById("player-range")
    // sliderTrack.addEventListener("mouseover", () => {
    //     sliderTrack.style.cursor = "pointer"
    // })

    const [playing, setPlaying] = useState(true)
    const [index, setIndex] = useState(
        songs.findIndex(song => song.id === activeSong.id)
    )
    const [seek, setSeek] = useState(0.0)
    const [isSeeking, setIsSeeking] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [duration, setDuration] = useState(0.0)
    const soundRef= useRef(null)
    const repeatRef = useRef(repeat)
    const setActiveSong = useStoreActions((state:any) => state.changeActiveSong)

    useEffect(() => {
        let timerId

        if (playing && !isSeeking) {
            const f = () => {
                setSeek(soundRef.current.seek())
                timerId = requestAnimationFrame(f)
            }

            timerId = requestAnimationFrame(f)
            return () => cancelAnimationFrame(timerId)
        }

        cancelAnimationFrame(timerId)
    }, [playing, isSeeking])

    useEffect(() => {
        setActiveSong(songs[index])
    }, [index, setActiveSong, songs])

    useEffect(() => {
        repeatRef.current = repeat
    }, [repeat])

    const setPlayState = (value) => {
        setPlaying(value)
    }

    const onShuffle = () => {
        setShuffle((state) => !state)
    }

    const onRepeat = () => {
        setRepeat((state) => !state)
    }

    const prevSong = () => {
        setIndex((state) => {
            return state ? state - 1 : songs.length - 1
        })
    }

    const nextSong = () => {
        setIndex((state) => {
            if (shuffle) {
                const next = Math.floor(Math.random() * songs.length)

                if (next === state) {
                    return nextSong()
                }
                return next
            }

            return state === songs.length - 1 ? 0 : state + 1
        })
    }

    const onEnd = () => {
        if (repeatRef.current) {
            setSeek(0)
            soundRef.current.seek(0)
        } else {
            nextSong()
        }
    }

    const onLoad = () => {
        const songDuration = soundRef.current.duration()
        setDuration(songDuration)
    }

    const onSeek = (e) => {
        setSeek(parseFloat(e[0]))
        soundRef.current.seek(e[0])
    }


    return (
        <Box height="100%">
            <Box>
                <ReactHowler
                    playing={playing}
                    src={activeSong?.url}
                    ref={soundRef}
                    onLoad={onLoad}
                    onEnd={onEnd}
                />
            </Box>
            <Center columnGap="5px">
                <IconButton
                    aria-label="shuffle"
                    onClick={onShuffle}
                    variant="link"
                    fontSize="22px"
                    _hover={{filter: "brightness(150%)"}}
                    color={shuffle ? "#1db954" : "#b2b2b2"}
                    transitionDuration="0ms"
                    icon={<MdShuffle/>}/>
                <IconButton
                    onClick={prevSong}
                    aria-label="skip-previous"
                    variant="link"
                    fontSize="28px"
                    _hover={{color: "white"}}
                    transitionDuration="0ms"
                    icon={<MdSkipPrevious/>}/>
                {playing ? (
                    <IconButton
                        onClick={() => setPlayState(false)}
                        aria-label="pause"
                        variant="link"
                        fontSize="36px"
                        color="white"
                        className={styles.playButton}
                        transitionDuration="0ms"
                        icon={<MdPauseCircleFilled/>}
                    />
                ) : (
                    <IconButton
                        onClick={() => setPlayState(true)}
                        aria-label="play"
                        variant="link"
                        fontSize="36px"
                        color="white"
                        className={styles.playButton}
                        transitionDuration="0ms"
                        icon={<MdPlayCircleFilled/>}
                    />
                )}
                <IconButton
                    onClick={nextSong}
                    aria-label="skip-next"
                    variant="link"
                    fontSize="28px"
                    _hover={{color: "white"}}
                    transitionDuration="0ms"
                    icon={<MdSkipNext/>}/>
                <IconButton
                    aria-label="repeat"
                    onClick={onRepeat}
                    variant="link"
                    fontSize="22px"
                    color={repeat ? "#1db954" : "#b2b2b2"}
                    _hover={{filter: "brightness(150%)"}}
                    transitionDuration="0ms"
                    icon={<MdRepeat/>}/>
            </Center>
            <Box color="#a7a7a7">
                <Flex justify="center" align="center" marginTop="6px">
                    <Box width="10%">
                        <Text fontSize="11px">{formatTime(seek)}</Text>
                    </Box>
                    {/* eslint-disable-next-line jsx-a11y/aria-proptypes */}
                    <RangeSlider aria-label={["min", "max"]}
                        width="80%"
                        step={0.1}
                        min={0}
                        id="player-range"
                        max={duration ? (duration.toFixed(2) as unknown as number) : 0}
                        onChange={onSeek}
                        value={[seek]}
                        onChangeStart={() => setIsSeeking(true)}
                        onChangeEnd={() => setIsSeeking(false)}
                    >
                        <RangeSliderTrack id="sliderTrack" bg="hsla(0,0%,100%,0.3)" paddingY="1px">
                            <RangeSliderFilledTrack paddingY="1px" bg="white" _hover={{bg: "#1db954"}}/>
                        </RangeSliderTrack>
                        <RangeSliderThumb visibility="visible" index={0} bg="white"/>
                    </RangeSlider>
                    <Box width="10%">
                        <Text textAlign="right" fontSize="11px">{formatTime(duration)}</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}