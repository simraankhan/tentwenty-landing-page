import BannerSlider from "@/components/BannerSlider";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="mt-5">
        <BannerSlider />
      </section>
    </>
  )
}

export default Home;