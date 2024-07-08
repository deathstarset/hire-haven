import Sidebar from "./components/Sidebar";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex w-full">
      <Sidebar />
      <div className="w-4/5 left-[20%] relative">{children}</div>
    </main>
  );
}
