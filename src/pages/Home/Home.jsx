import { Link } from "react-router-dom"
import Banner from "../../components/ui/Banner";
import Aipowered from "../../components/ui/AiPowered";
import HowItWorks from "../../components/ui/HowItWorks";
import WorkSmarter from "../../components/ui/WorkSmarter";
import CTA from "../../components/ui/CTA";
const Home = () => {
  return (
    <div className="">
     <Banner />
     <Aipowered />
     <HowItWorks />
     <WorkSmarter />
     <CTA />
    </div>
  );
};

export default Home;