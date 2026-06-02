import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { CompanyProfile } from "@/components/sections/CompanyProfile";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ShopPreview } from "@/components/sections/ShopPreview";
import { Team } from "@/components/sections/Team";
import { Delivery } from "@/components/sections/Delivery";
import { FindUs } from "@/components/sections/FindUs";
import { Contact } from "@/components/sections/Contact";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IrriTech & Solar Systems — Smart Irrigation & Solar for Zimbabwean Farms" },
      {
        name: "description",
        content:
          "Bulawayo-based experts in irrigation, solar installation, borehole drilling and water tanks. Powering Zimbabwean farms with reliable end-to-end solutions.",
      },
      { property: "og:title", content: "IrriTech & Solar Systems — Smart Irrigation & Solar" },
      {
        property: "og:description",
        content: "Smart Irrigation & Solar Solutions for the Modern African Farmer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main>
      <Hero />
      <CompanyProfile />
      <About />
      <Services />
      <ShopPreview />
      <Team />
      <Delivery />
      <FindUs />
      <Contact />
    </main>
  );
}
