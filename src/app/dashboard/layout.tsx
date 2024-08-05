export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <hr />
      <div className={`bg-black text-textColor flex`}>{children}</div>
    </>
  );
}
