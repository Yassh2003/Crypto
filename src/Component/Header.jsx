import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HStack p= {"4"} shadow={"base"} bgColor={"black"} pos={"sticky"} top="0" left="0" zIndex={"1"}>
      <Button variant={"unstyled"} color={"white"} marginRight={"7"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginRight={"7"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginRight={"7"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginRight={"10"}>
        <Link to="/blog">Blog</Link>
      </Button>
    </HStack>
  )
}

export default Header