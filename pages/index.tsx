import Shop from "./Components/Shop"
import NavBar from "./Components/NavBar"
import Banner from "./Components/Banner"
import Shows from "./Components/Shows"
import Gallery from "./Components/Gallery"
import News from "./Components/News"
import Contact from "./Components/Contact"

function Page() {


  return (
    <>
        <NavBar />
        <section id = "banner">
            <Banner/>
        </section>
        <section id="shop">
            <Shop />
        </section>
        <section id="shows" >
            <Shows />
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

export default Page
