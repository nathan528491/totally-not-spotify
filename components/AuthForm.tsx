import {Box, Flex} from '@chakra-ui/layout'
// import {useRouter} from 'next/router'
// import {useState} from "react";
// import {useSWRConfig} from "swr";
// import {auth} from "../lib/mutations";
import NextImage from "next/image";
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook, AiFillApple} from "react-icons/ai";
import styles from "../styles/AuthForm.module.css";


// const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({mode}) => {
function AuthForm() {
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
                            <span className={styles.spanSpan}><AiFillFacebook/></span><span>continuer avec facebook</span>
                        </Flex>
                        <Flex align="center" className={`${styles.appleButton} ${styles.buttonGroup}`}>
                            <span className={styles.spanSpan}><AiFillApple/> </span><span>continuer avec apple</span>
                        </Flex>
                        <Flex align="center" className={`${styles.googleButton} ${styles.buttonGroup}`}>
                            <span className={styles.spanSpan}><FcGoogle/></span><span>continuer avec google</span>
                        </Flex>



                    </Flex>
                </div>
            </Flex>

        </Flex>


    )
}

export default AuthForm