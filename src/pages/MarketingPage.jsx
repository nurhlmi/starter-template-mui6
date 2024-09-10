import Divider from "@mui/material/Divider";
import AppAppBar from "@/components/AppAppBar";
import Hero from "@/components/Hero";
import LogoCollection from "@/components/LogoCollection";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function MarketingPage() {
   return (
      <>
         <AppAppBar />
         <Hero />
         <div>
            <LogoCollection />
            <Features />
            <Divider />
            <Testimonials />
            <Divider />
            <Highlights />
            <Divider />
            <Pricing />
            <Divider />
            <FAQ />
            <Divider />
            <Footer />
         </div>
      </>
   );
}
