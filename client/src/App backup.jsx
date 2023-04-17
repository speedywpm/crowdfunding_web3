import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home, Profile, CreateCampaign, CampaignDetails} from './pages';
import {Navbar, Sidebar} from './components';
import Layout from './components';
const App = () => {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
      </div>
        <h1></h1>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar />
        <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </Layout>
      </div>
    </div>
  )
}

export default App