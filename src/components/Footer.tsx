export default function Footer() {
  return (
    <footer className="border-t border-base-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-base-content/50">
        © {new Date().getFullYear()} Dan Kwemoi — Built with React, TypeScript,
        Tailwind & DaisyUI.
      </div>
    </footer>
  );
}