import type { Metadata } from 'next'
import { Noto_Sans, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-ui',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-code',
})

export const metadata: Metadata = {
  title: 'Chiến Thắng Điện Biên Phủ Trên Không',
  description:
    'Trang web tưởng niệm chiến thắng Điện Biên Phủ trên không từ 18-29 tháng 12 năm 1972 - một chiến thắng vĩ đại của dân tộc Việt Nam',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body
        className={`${notoSans.variable} ${robotoMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
