"use client";

export default function RealScoutInContractSection() {
  return (
    <section className="py-12 md:py-16 bg-white realscout-in-contract" aria-labelledby="in-contract">
      <div className="container mx-auto px-4">
        <h2 id="in-contract" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
          Properties In Contract
        </h2>
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Providence Real Estate helps buyers and sellers across Providence, North Las Vegas, and Las Vegas.
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="In Contract" property-types=",SFR,MF,TC" price-min="500000" price-max="800000"></realscout-office-listings>`,
          }}
        />
      </div>
    </section>
  );
}
