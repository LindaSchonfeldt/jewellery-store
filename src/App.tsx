import { useBreakpointValue } from '@chakra-ui/react'

import DesktopNav from './components/layout/DesktopNav'
import MobileNav from './components/layout/MobileNav'
import Home from './pages/Home'

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
