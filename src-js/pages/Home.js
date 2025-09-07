// src-js/pages/Home.jsx
export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Osteen Evidence Hub</h1>
      <p className="mb-6">Choose a section:</p>
      <ul className="space-y-3">
        <li><a className="text-blue-600 underline" href="/evidence">Evidence</a></li>
        <li><a className="text-blue-600 underline" href="/music">Music</a></li>
        <li><a className="text-blue-600 underline" href="/album/bad-actors">Bad Actors Album</a></li>
      </ul>
    </main>
  );
}
