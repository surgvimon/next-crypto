import LayoutProvider from '@/components/LayoutProvider'
import './globals.css'
import ReduxProvider from '@/components/ReduxProvider'
import TopNav from '@/components/nav/TopNav'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: {children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <LayoutProvider>
        <TopNav/>
        {children}
      </LayoutProvider>
    </ReduxProvider>
  )
}
