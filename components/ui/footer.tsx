const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="p-5 h10 bg-black text-white">
      <p>Made with 🪚 by <a href="https://github.com/BogdanDevBst" target="_blank" rel="noopener noreferrer">Logiscript SRL</a> {year}</p>
    </footer>
  );
}