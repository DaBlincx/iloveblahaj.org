import Head from 'next/head'
import { useRouter } from 'next/router'

export default function AutoHead() {
    const router = useRouter()
    const currentPath = router.pathname.slice(1)
    // returns header with title in formate "{urlpath} | iloveblahaj.org" if urlpath is not empty
    const title = currentPath ? `${currentPath} | iloveblahaj.org` : 'iloveblahaj.org'
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="gay website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}