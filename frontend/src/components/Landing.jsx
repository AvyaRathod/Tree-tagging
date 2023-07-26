import React from 'react'
import MapPage from './MapPage'
import Card from './Card'

import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    
    <div>
  

    <div className='place-items-center'>
    <div className=' text-center text-4xl font-bold mt-12 '>Interact with our map to geotag a tree near you!</div>
    <MapPage />
    </div>
   
    <div className='flex justify-center items-center'>
    <button className='mt-24 bg-[#1b992a] p-2 w-64 text-white rounded-2xl'><Link to='/create-tree'>Add Tree Data</Link></button>
    </div>
    
    <div className='mt-28 text-center text-4xl font-bold '>Our Current Events</div>
    <div className='flex justify-around'>
    <Card title='Tree plantation'  desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo at neque a lacinia. Mauris.' da='1st August 2023' location='hyderabad' />
    <Card title='Awareness camp' da='4th August 2023' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo at neque a lacinia. Mauris.' location='Bangalore'/>
    <Card title='Seminar on environmental restoration' da='7th August 2023' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo at neque a lacinia. Mauris.' location='Pune'/>
    
    </div>

    <div className='flex justify-around mt-4'>
    <Card title='trek' da='15th August 2023'  desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo at neque a lacinia. Mauris.' location='Mumbai'/>
    <Card title='Earth Day plantation' da='1st September 2023' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo at neque a lacinia. Mauris.' location='Bangalore'/>
    <Card title='Eco boost' da='3rd September 2023' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo at neque a lacinia. Mauris.' location='hyderabad'/>
    
    </div>
    
    

    
    </div>
  )
}

export default Landing;