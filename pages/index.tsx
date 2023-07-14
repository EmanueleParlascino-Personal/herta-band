import Shop from "./Components/Shop"
import NavBar from "./Components/NavBar"
import Banner from "./Components/Banner"
import Shows from "./Components/Shows"
import Gallery from "./Components/Gallery"
import News from "./Components/News"
import Contact from "./Components/Contact"

import { client } from '../lib/client'

const Page = ({products, banners, shows}) => {


  return (
    <>
        <NavBar />
        <section id = "banner">
            <Banner banners = {banners}/>
        </section>
        <section id="shop">
            <Shop products = {products}/>
        </section>
        <section id="shows" >
            <Shows shows = {shows}/>
        </section>
        <section id="gallery" >
            <Gallery />
        </section>
        <section id="news" >
            <News />
        </section>
        <section id="contact" >
            <Contact />
        </section>
    </>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerquery = '*[_type == "banner"]';
    const banners = await client.fetch(bannerquery);

    const showsQuery = '*[_type == "show"]';
    const shows = await client.fetch(showsQuery);
    return {
        props:{products, banners, shows}
    }

}

export default Page
