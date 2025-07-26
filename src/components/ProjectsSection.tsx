import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Project Card */}
          <Link
            href="/flunke"
            className="block rounded-lg shadow-lg bg-white dark:bg-gray-800 p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Flunk-E
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A short description of your Flunk-E project.
            </p>
          </Link>
          {/* Add more project cards below */}
          {/* 
          <Link href="/another-project" className="...">
            ...
          </Link>
          */}
        </div>
      </div>
    </section>
  );
}