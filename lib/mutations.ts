import fecther from "./fetcher"

export const auth = (
    mode: "signin" | "signup",
    body:{email:string; password:string}) => {
    return fecther(`/${mode}`, body)
}