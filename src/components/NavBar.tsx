import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwtich from './ColorModeSwtich'
import { SearchInput } from './searchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-around' padding={"10px"}>
        <Image src={logo} boxSize={"60px"} boxShadow='50'></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwtich />
    </HStack>
  )
}

export default NavBar