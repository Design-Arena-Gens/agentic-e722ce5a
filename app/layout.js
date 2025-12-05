export const metadata = {
  title: 'Myostatin-Deficient Gorilla',
  description: 'Hairless gorilla with blocked myostatin gene',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
