import StructuredData from '@/components/StructuredData';
import AdirondackPageClient from '@/components/AdirondackPageClient';

export default function HomePage() {
  return (
    <>
      <StructuredData type="landingPage" />
      <AdirondackPageClient />
    </>
  );
}
