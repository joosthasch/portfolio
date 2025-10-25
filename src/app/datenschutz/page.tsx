export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-white">Datenschutzerklärung</h1>

        <p className="mb-6 text-neutral-400">
          Der Schutz Ihrer Daten ist mir wichtig. Auf dieser Portfolio-Website werden nur so viele personenbezogene Daten
          verarbeitet, wie zur Bereitstellung und Darstellung der Inhalte notwendig sind.
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Verantwortlich</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
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

        <h2 className="text-xl font-semibold mt-10 text-white">Welche Daten verarbeitet werden</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Beim Besuch dieser Website werden automatisch technische Daten (z. B. IP-Adresse, Browsertyp, Zeitpunkt des
          Zugriffs) in Server-Logs gespeichert. Diese dienen ausschließlich der Sicherheit und Stabilität der Seite.
        </p>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Wenn Sie mich per E-Mail kontaktieren, werden die übermittelten Informationen (z. B. Name, E-Mail-Adresse,
          Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage genutzt und nicht an Dritte weitergegeben.
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Cookies & Tracking</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Diese Seite verwendet keine Cookies, keine Analyse-Tools und keine externen Werbedienste.
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Hosting</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Diese Website wird über <strong>Netlify</strong> gehostet. Beim Aufruf werden technisch notwendige Daten (z. B.
          IP-Adresse) auf den Servern von Netlify verarbeitet, um den Betrieb der Seite zu ermöglichen. Weitere
          Informationen finden Sie in der Datenschutzerklärung von Netlify:{" "}
          <a
            href="https://www.netlify.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            netlify.com/privacy
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-10 text-white">Ihre Rechte</h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen
          Daten. Zur Ausübung dieser Rechte genügt eine formlose Mitteilung per E-Mail an die oben genannte Adresse.
        </p>

        <p className="text-sm text-neutral-600 mt-10">
          Hinweis: Diese Seite ist ein persönliches Portfolio-Projekt. Es werden keine personenbezogenen Daten zu
          Analyse-, Tracking- oder Marketingzwecken verarbeitet.
        </p>
      </section>
    </main>
  );
}
