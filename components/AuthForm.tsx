import {Box, Flex} from '@chakra-ui/layout'
// import {useRouter} from 'next/router'
// import {useState} from "react";
// import {useSWRConfig} from "swr";
// import {auth} from "../lib/mutations";
import NextImage from "next/image";
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook, AiFillApple} from "react-icons/ai";
import styles from "../styles/AuthForm.module.css";


const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({mode}) => {
// function AuthForm() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    // const router = useRouter()

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

                        <Flex direction="column">
                            <Box lineHeight="0" paddingBottom="12px">
                                <Box lineHeight="0" paddingBottom="8px">
                                    <label htmlFor="email" className={styles.labelText}>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Adresse email ou nom d'utilisateur
                                    </label>
                                </Box>
                                <input
                                    id="email"
                                    className={styles.inputText} type="text"
                                    placeholder="Adresse email ou nom d'utilisateur"/>
                            </Box>

                            <Box width="100%" lineHeight="0" paddingBottom="12px">
                                <Box lineHeight="0" paddingBottom="8px">
                                    <label htmlFor="password" className={styles.labelText}>
                                        Mot de passe
                                    </label>
                                </Box>
                                <input
                                    id="password"
                                    className={styles.inputText} type="text"
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
                                    <button type="submit" className={styles.buttonConnect}>Se Connecter</button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <hr className={styles.divider}/>
                        <Box>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className={styles.paragraphNoAccount}>Vous n'avez pas de compte ?</p>
                            <Flex align="center" className={`${styles.googleButton} ${styles.buttonGroup}`}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <span>je n'ai pas spotify</span>
                            </Flex>
                        </Box>
                    </Flex>

                </div>
            </Flex>

        </Flex>


    )
}

export default AuthForm