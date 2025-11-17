import { useBreakpointValue } from '@chakra-ui/react'
import Home from './pages/Home'
import MobileNav from './components/MobileNav'
import DesktopNav from './components/DesktopNav'

const App: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      {!isDesktop && <MobileNav />}
      {isDesktop && <DesktopNav />}
      <Home />
    </>
  )
}

export default App
