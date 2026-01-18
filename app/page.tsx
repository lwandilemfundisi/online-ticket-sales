import SlidingBanner from "./components/sliding-banner/SlidingBanner";

export default function Home() {
  return (
    <>
      <section className="fw-section padding-top-3x padding-bottom-5x">
        <div className="bg-angle bg-inset-shadow-both bg-pattern"></div>
        <div className="container">
          <SlidingBanner/>
        </div>
      </section>
    </>
  );
}
