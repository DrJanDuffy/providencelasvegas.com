import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Providence Las Vegas | Dr. Jan Duffy Real Estate',
  description: 'Real estate in Providence, Las Vegas with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-semibold">Providence Las Vegas</h1>
            <p className="mt-1 text-sm text-gray-600">
              Dr. Jan Duffy, License S.0197614.LLC
            </p>
            <p className="text-sm text-gray-600">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
