export const metadata = {
  title: 'NextContent - A Next.js Project Blog',
  description: 'A Next.js project with TypeScript and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  )
}