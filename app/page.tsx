import "server-only";

import Banner from "@/components/banner/Banner";
import SearchTicket from "@/components/search-ticket/SearchTicket";
import SlidingBanner from "@/components/sliding-banner/SlidingBanner";
import Social from "@/components/social/Social";
import Subscribe from "@/components/subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Banner AnotherComponent={SearchTicket} ApplyBackgound={true}/>
      <Banner AnotherComponent={SlidingBanner} ApplyBackgound={false}/>
      <Banner AnotherComponent={Subscribe} ApplyBackgound={true}/>
      <Banner AnotherComponent={Social} ApplyBackgound={false}/>
    </>
  );
}
