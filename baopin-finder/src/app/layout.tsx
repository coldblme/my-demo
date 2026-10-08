import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "找爆品 · 候选池",
  description: "拼多多百货爆品候选录入与列表（Slice A）",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={`${notoSansSc.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-border bg-card">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              找爆品
            </Link>
            <nav className="flex items-center gap-3 text-sm">
              <Link
                href="/"
                className="text-muted hover:text-foreground transition-colors"
              >
                候选列表
              </Link>
              <Link
                href="/new"
                className="rounded-md bg-accent px-3 py-1.5 font-medium text-white hover:bg-accent-hover transition-colors"
              >
                新建候选
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
