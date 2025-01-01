export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Musa Özdemir. All rights reserved.</p>
      </div>
    </footer>
  );
}