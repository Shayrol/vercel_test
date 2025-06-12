import DarkModeToggle from "./Dark_mode_toggle";

export default function Header() {
  return (
    <header
      className="
      relative flex justify-center items-center w-full h-16 border-b-2 border-[#ff6b6b]
      light:bg-[var(--light-bg-main)] light:text-[var(--light-text-main)]
      bg-[var(--bg-main)] text-[var(--text-main)]"
    >
      <h1>Header</h1>
      <DarkModeToggle />
    </header>
  );
}
