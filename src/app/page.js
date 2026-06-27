import EbookGenres from "@/components/home/EbookGenres";
import HeroBanner from "@/components/home/HeroBanner";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <EbookGenres></EbookGenres>
      <Testimonials></Testimonials>
    </main>
  );
}
