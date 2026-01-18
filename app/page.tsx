import Banner from "./components/banner/Banner";
import SearchTicket from "./components/search-ticket/SearchTicket";
import SlidingBanner from "./components/sliding-banner/SlidingBanner";

export default function Home() {
  return (
    <>
      <Banner AnotherComponent={SearchTicket} ApplyBackgound={true}/>
      <Banner AnotherComponent={SlidingBanner} ApplyBackgound={false}/>
    </>
  );
}
