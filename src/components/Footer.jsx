export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Mudassir Farooqui</p>
    </footer>
  );
}
