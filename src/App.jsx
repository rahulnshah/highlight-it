import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Usage from "./components/Usage"
import { Link, Route, Routes } from "react-router-dom"
import { Layout } from './components/Layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function App() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/about'>
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/usage'>
            Usage
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />}></Route>
          <Route path="about" element={<About />} />
          <Route path="usage" element={<Usage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
