import DarkModeToggle from "./Dark_mode_toggle";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full h-16 border-b-2 border-[#ff6b6b]">
      <h1>Header</h1>
      <DarkModeToggle />
    </header>
  );
}
