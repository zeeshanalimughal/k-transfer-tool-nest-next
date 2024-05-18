import OurService from "@/components/web/our-services";
import Ratings from "@/components/web/ratings";
import ToolsCards from "@/components/web/tools-card";
import TrustedByClients from "@/components/web/trusted-by-clients";
export default function Home() {
  return (
    <>
      <ToolsCards />
      <TrustedByClients />
      <Ratings />
      <OurService />
    </>
  );
}
