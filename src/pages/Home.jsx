import About from "../components/home/About";
import Blogs from "../components/home/Blogsec";
import FutureVentures from "../components/home/FutureVentures";
import Hero from "../components/home/Hero";
import Services from "../components/home/Service";
import WhyChooseUs from "../components/home/Why";


export const Home = () => {
  return (
    <main className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <FutureVentures />
        <Blogs />
      {/* <WhatsAppFloatingButton />
      <CallButton  phoneNumber="+919078713435" /> */}
    </main>
  );
};