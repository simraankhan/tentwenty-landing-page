import BannerSlider from "@/components/BannerSlider";
import CardSlider from "@/components/CardSlider";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

const Home = () => {
  return (
    <>
      <div className="w-full z-2 sm:absolute sm:top-3">
        <Navbar />
      </div>
      <main>
        <section>
          <BannerSlider />
        </section>
        <section className="mt-20">
          <Products />
        </section>
        <section className="pb-20 mt-10">
          <div className="px-2">
            <CardSlider />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;