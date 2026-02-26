export function About() {
  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
              Why Primatronic
            </p>
            {/* Alex wants a trusted partner, not just a vendor */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              One partner.
              <br />
              Hardware to software.
              <br />
              <span className="text-muted">No gaps.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Strategic value for Alex */}
            <p className="text-lg text-muted leading-relaxed">
              Most automation vendors solve one layer. We integrate the full
              stack — custom electronics, firmware, vision systems, and production
              software — so your systems actually talk to each other.
            </p>
            {/* Operational value for Maria */}
            <p className="text-lg text-muted leading-relaxed">
              Aligned with Industry 5.0, every system is designed to be
              operated by your floor team, not just your engineers. Because
              technology that sits unused is technology that failed.
            </p>

            {/* Addressing unasked questions from all ICPs */}
            <div className="rounded-2xl bg-white border border-ring p-6 mt-8">
              <h3 className="text-sm font-semibold mb-4">
                Questions we hear in every first call
              </h3>
              <ul className="space-y-3">
                {[
                  { q: "\"What's the hidden cost of implementation?\"", a: "We scope fixed-price projects. No surprises." },
                  { q: "\"How easy is it to scale later?\"", a: "Modular architecture. Expand without rearchitecting." },
                  { q: "\"Will my floor team actually use it?\"", a: "We design for operators, then train them on-site." },
                ].map((item) => (
                  <li key={item.q} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-foreground text-[8px] text-white">
                      &#10003;
                    </span>
                    <span>
                      <span className="font-medium text-foreground">{item.q}</span>
                      {" "}{item.a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
