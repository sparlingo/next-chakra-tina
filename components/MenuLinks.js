import {
  Link,
  Text
} from '@chakra-ui/react'

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Link href={to}>
          <Text display="block" {...rest}>
            {children}
          </Text>
        </Link>
      </Stack>
    </Box>  
  )
}

export default MenuItem