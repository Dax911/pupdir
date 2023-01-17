import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="p-0 flex flex-col items-center justify-center m-auto">{children}</main>
  </>
)

export default Layout