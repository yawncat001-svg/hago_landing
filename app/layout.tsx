export const metadata = {
  title: 'Yawncat',
  description: 'Yawncat website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}