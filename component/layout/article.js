import { Global } from '@emotion/react'
import {motion} from 'framer-motion'
import Head from 'next/head'

const variants = {
    hidden: {opacity: 0,x:0, y: 20},
    enter: {opacity: 1,x:0, y: 0},
    exit: {opacity: 0,x:-0, y: 20},
}

const GridItemStyle = () => {
    return (
    <Global
    style={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }`}
    />)
}

const Layout = ({children, title} ) => {
    return (
        <motion.article
        inherit="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{duration: 0.4, type: "easeInOut"}}
        >
            <>
            {title && (
                <Head>
                    <title>{title} - Nguyen Phuong</title>
                    <meta name="twitter:title" content={title}/>
                    <meta property="og:type" content={title}/>
                </Head>
            )}
            {children}
            <GridItemStyle/>
            </>
        </motion.article>
    )
}

export default Layout