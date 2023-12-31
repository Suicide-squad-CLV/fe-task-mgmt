import Image from "next/image";
import "../globals.css";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <div className="m-auto flex w-2/3 items-center justify-center gap-9 rounded-xl bg-white p-16 shadow-lg">
        <div className="m-8 flex sm:w-full lg:w-2/3">
          <div className="m-auto w-2/3">{children}</div>
        </div>
        <div className="ml-auto sm:hidden lg:block">
          <Image src="/image/auth-image.png" width={645} height={769} alt="Auth image" />
        </div>
      </div>
    </div>
  );
}
