export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex">
      <div className="p-4 h-screen w-1/2 bg-slate-50">
        <h1 className="text-3xl font-semibold">HireHaven</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center">{children}</div>
    </main>
  );
}
