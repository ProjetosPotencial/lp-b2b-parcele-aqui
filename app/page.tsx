import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CredibilityStats } from '@/components/CredibilityStats';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { UseCases } from '@/components/UseCases';
import { PartnerLogos } from '@/components/PartnerLogos';
import { OperationOptions } from '@/components/OperationOptions';
import { BehindBrand } from '@/components/BehindBrand';
import { TrustLogos } from '@/components/TrustLogos';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityStats />
        <Problem />
        <Solution />
        <HowItWorks />
        <UseCases />
        <PartnerLogos />
        <OperationOptions />
        <BehindBrand />
        <TrustLogos />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
