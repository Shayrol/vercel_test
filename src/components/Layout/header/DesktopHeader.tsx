import DarkModeToggle from "../../Dark_mode_toggle";

export default function DesktopHeader() {
  return (
    <header
      className="
      max-md:hidden
      relative flex justify-center items-center w-full h-16 border-b-2 border-[#ff6b6b]
      light:bg-[var(--light-bg-main)] light:text-[var(--light-text-main)]
      bg-[var(--bg-main)] text-[var(--text-main)]"
    >
      <DarkModeToggle />
    </header>
  );
}
