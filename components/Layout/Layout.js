import Head from "next/head";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import styles from '../../styles/Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name={'keywords'} content={'web development, web games, free games'} />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                      crossOrigin="anonymous"/>
                <title>Free Web Games</title>
            </Head>
            <NavBar />

            <div className={styles.body}>
                {children}
                <Footer />
            </div>


        </div>);
}

export default Layout;