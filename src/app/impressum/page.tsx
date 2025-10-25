export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-white">Impressum</h1>

        <p className="mb-6 text-neutral-400">
          Angaben gemäß § 5 TMG
        </p>

        <p className="text-neutral-400 leading-relaxed">
          Joost Haschen
          <br />
          Hochschule Osnabrück
          <br />
          E-Mail:{" "}
          <a
            href="mailto:joost.hasch@web.de"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            joost.hasch@web.de
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Haftung für Inhalte</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Betreiber dieser Seite bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich.
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Haftung für Links</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Diese Website enthält eventuell Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          Deshalb kann ich für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Urheberrecht</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Die auf dieser Website erstellten Inhalte, Designs und Werke unterliegen dem deutschen Urheberrecht.
          Eine Vervielfältigung, Bearbeitung, Verbreitung oder jegliche Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>

        <p className="text-sm text-neutral-600 mt-10">
          Hinweis: Diese Seite ist ein nicht-kommerzielles Portfolio-Projekt im Rahmen des Studiums. Alle gezeigten
          Projekte dienen der Veranschaulichung von Design- und Konzeptarbeiten.
        </p>
      </section>
    </main>
  );
}
