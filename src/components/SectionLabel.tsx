export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium tracking-[0.25em] uppercase text-gold font-body mb-4">
      {children}
    </span>
  );
}
