import Header from "@/components/layout/Header";
import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex">
      <Header />
      {children}
    </div>
  );
}
