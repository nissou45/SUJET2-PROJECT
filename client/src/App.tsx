import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

import Header from './components/Header'
import Footer from './components/Footer'

import Login from './pages/LoginPage'
import Register from './pages/RegisterPage';
import HomePage from './pages/HomePage'

import loginBg from './assets/imgs/loginBg.avif'

function App() {
  const location = useLocation()
  const pathSegment = location.pathname.split('/').filter(segment => segment.length > 0)
  const onLoginOrRegister = pathSegment.length === 0 || pathSegment[0] === "register"

  if (onLoginOrRegister) {
    return (
      <Flex flexDir={"column"} justifyContent={"center"}
      backgroundImage={`url(${loginBg})`} backgroundRepeat={"no-repeat"} backgroundPosition={"center"} backgroundSize={"cover"} h={"100vh"}>
        <Box id='App-contents'>
          <Routes>
            <Route path='/' element={<Login />}/>

            <Route path='/register' element={<Register />}/>
    
            <Route path='/home' element={<HomePage/>}/>
          </Routes>
        </Box>
        <Box id='footer'
        pos={"fixed"} bottom={"0"} pb={"20px"} w={"100%"} color={"white"}>
          <Footer />
        </Box>
    </Flex>
    )
  } else {
    return (
    <Box
    backgroundImage={`url(${loginBg})`} backgroundRepeat={"no-repeat"} backgroundPosition={"center"} backgroundSize={"cover"} h={"100vh"}>
      <Box id='header'>
        <Header />
      </Box>
      <Box id='App-contents'>
        <Routes>
          <Route path='/' element={<Login />}/>
  
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </Box>
      <Box id='footer'
      pos={"fixed"} bottom={"0"} pb={"20px"} w={"100%"}>
        <Footer />
      </Box>
    </Box>
  )
  }

}

export default App
