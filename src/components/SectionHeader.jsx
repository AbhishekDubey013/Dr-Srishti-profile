function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-medical-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-600">{children}</p> : null}
    </div>
  );
}

export default SectionHeader;
