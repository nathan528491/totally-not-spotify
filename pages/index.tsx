// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import GradientLayout from "../components/GradientLayout";

export default function Home() {
    return (
        <GradientLayout
            color="red"
            subtitle="profile"
            title="Nate"
            description="Nate is a full-stack developer who loves to build things."
        >
            <div>home page</div>
        </GradientLayout>
    )
}
