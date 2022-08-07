import { Nav } from 'tinacms'
import {MenuToggle} from './MenuToggle'
import Logo from './Logo'
import MenuLinks from './MenuLinks'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar