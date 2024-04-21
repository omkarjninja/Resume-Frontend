import FAQ from "./faq";
import Footers from "./footer";
import Hero from "./hero";
import Logos from "./logos";
import Navbar from "./nav";
import Second from "./second";
import Testa from "./testamonial";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Second></Second>
      <Testa></Testa>
      <Logos></Logos>
      <FAQ></FAQ>
      <Footers></Footers>
    </>
  );
}
export default Home;
