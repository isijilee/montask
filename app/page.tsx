import { MontaskAudienceSplit } from "@/components/ui/montask-audience-split";
import { MontaskCta } from "@/components/ui/montask-cta";
import { MontaskFeatureGrid } from "@/components/ui/montask-feature-grid";
import { MontaskFooter } from "@/components/ui/montask-footer";
import { MontaskHero } from "@/components/ui/montask-hero";
import { MontaskHowItWorks } from "@/components/ui/montask-how-it-works";
import { MontaskMarketplacePreview } from "@/components/ui/montask-marketplace-preview";
import { MontaskNavbar } from "@/components/ui/montask-navbar";
import { MontaskTrustStrip } from "@/components/ui/montask-trust-strip";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[var(--page-bg)] text-[var(--ink)]">
      <div className="relative overflow-hidden bg-[var(--hero-bg)] text-white">
        <MontaskNavbar />
        <MontaskHero />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--page-bg)]"
        />
      </div>

      <div className="relative overflow-hidden bg-[var(--page-bg)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(245,155,47,0.09),transparent_42%),radial-gradient(circle_at_15%_35%,rgba(255,193,90,0.08),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(255,138,76,0.08),transparent_28%)]"
        />
        <MontaskHowItWorks />
        <MontaskFeatureGrid />
        <MontaskMarketplacePreview />
        <MontaskAudienceSplit />
        <MontaskTrustStrip />
      </div>

      <div className="relative overflow-hidden bg-[var(--hero-bg)] text-white">
        <MontaskCta />
        <MontaskFooter />
      </div>
    </main>
  );
}
