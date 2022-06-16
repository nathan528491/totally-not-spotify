import {Box, Flex, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import {useRouter} from "next/router"
import {FC, useState} from "react"
import NextImage from "next/image"
import {FcGoogle} from "react-icons/fc"
import {AiFillFacebook, AiFillApple} from "react-icons/ai"
import NextLink from "next/link"
import styles from "../styles/AuthForm.module.css"
import {auth} from "../lib/mutations"

// eslint-disable-next-line react/function-component-definition
const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await auth(mode, {email, password})
        await router.push("/")
    }

    return (
        <Flex direction="column">
            <Box className={styles.topBox}>
                <Box className={styles.logoBox}>
                    <NextImage
                        src="/logo-black.svg"
                        height={56}
                        width={182}/>
                </Box>
            </Box>
            <Flex padding="10px" alignSelf="center">
                <div>
                    <Flex rowGap="10px" direction="column" justify="center" align="stretch">
                        <Flex align="center" className={`${styles.facebookButton} ${styles.buttonGroup}`}>
                            <span
                                className={styles.spanSpan}><AiFillFacebook/></span><span>continuer avec facebook</span>
                        </Flex>
                        <Flex align="center" className={`${styles.appleButton} ${styles.buttonGroup}`}>
                            <span className={styles.spanSpan}><AiFillApple/> </span><span>continuer avec apple</span>
                        </Flex>
                        <Flex align="center" className={`${styles.googleButton} ${styles.buttonGroup}`}>
                            <span className={styles.spanSpan}><FcGoogle/></span><span>continuer avec google</span>
                        </Flex>
                        <Flex align="center" justify="center">
                            <hr className={styles.divider}/>
                            <span className={styles.ouSpan}>ou</span>
                            <hr className={styles.divider}/>
                        </Flex>
                        <form onSubmit={handleSubmit} action="">
                            <Flex direction="column">
                                <Box lineHeight="0" paddingBottom="12px">
                                    <Box lineHeight="0" paddingBottom="8px">
                                        <label htmlFor="email" className={styles.labelText}>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Adresse email ou nom d'utilisateur
                                        </label>
                                    </Box>
                                    <input
                                        type="email"
                                        id="email"
                                        className={styles.inputText}
                                        placeholder="Adresse email ou nom d'utilisateur"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Box>
                                <Box width="100%" lineHeight="0" paddingBottom="12px">
                                    <Box lineHeight="0" paddingBottom="8px">
                                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                        <label htmlFor="password" className={styles.labelText}>
                                            Mot de passe
                                        </label>
                                    </Box>
                                    <input
                                        id="password"
                                        className={styles.inputText} type="password"
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Mot de passe"/>
                                </Box>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className={styles.linkText} href="#">Mot de passe oublié ?</a>
                                <Flex justify="space-between">
                                    <Box paddingBottom="12px">
                                        <Flex paddingY="4px" align="center" minHeight="32px">
                                            <input className={styles.checkBox} type="checkbox"/>
                                            <span className={styles.spanSouvenir}><p>Se souvenir de moi</p></span>
                                        </Flex>
                                    </Box>
                                    <Flex>
                                        {mode === "signin"
                                            ?
                                            <button type="submit" className={styles.buttonConnect}>Se Connecter</button>
                                            // eslint-disable-next-line react/no-unescaped-entities
                                            : <button type="submit" className={styles.buttonConnect}>S'inscrire</button>
                                        }
                                    </Flex>
                                </Flex>
                            </Flex>
                        </form>
                        <hr className={styles.divider}/>
                        {mode === "signin" &&
                            <Box>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p className={styles.paragraphNoAccount}>Vous n'avez pas de compte ?</p>
                                <LinkBox>
                                    <NextLink href="/signup"  passHref>
                                        <LinkOverlay className={styles.buttonGoToSignUp}>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            je n'ai pas spotify
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </Box>
                        }
                    </Flex>
                </div>
            </Flex>
        </Flex>
    )
}

export default AuthForm