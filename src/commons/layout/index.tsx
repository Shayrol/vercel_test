import { HeaderGlobal } from "./header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] gap-5">
        <HeaderGlobal />
        {children}
      </div>
    </>
  );
}
