import LandingPage from "@/components/home/landing-page";
import HomeSection from "@/components/home/section";
export default function Page() {
  return (
    <div>
      <main className="text-gray-900">
        <section className="pt-20 md:pt-40">
          <div className="container mx-auto px-8 lg:flex">
            <HomeSection />
            <LandingPage />
          </div>
        </section>
      </main>
    </div>
  );
}
