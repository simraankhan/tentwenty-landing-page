import BannerSlider from "@/components/BannerSlider";
import CardSlider from "@/components/CardSlider";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <div className="w-full z-2 sm:absolute sm:top-3">
        <Navbar />
      </div>
      <section>
        <BannerSlider />
      </section>
      <section className="mt-20">
        <div className="flex flex-col items-center justify-center text-center px-2">
          <h1 className="font-semibold text-sm sm:text-2xl mb-3">Quality Products</h1>
          <p className="text-gray-500 text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci laboriosam omnis facere animi est quis distinctio reiciendis ex quos quo sapiente voluptatem similique, vero ab? Ipsam atque porro soluta.</p>
        </div>
      </section>
      <section className="pb-20 mt-10">
        <div className="px-2">
          <CardSlider />
        </div>
      </section>
    </>
  )
}

export default Home;