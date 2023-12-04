import React from 'react'


const NavBar = () => {
  return (
   <div className='md:w-[1523px'>
 <nav>
 <ul className='justify-center content-center flex gap-6 top-0 py-16 text-3xl font-semibold'>
                    <li className='hover:text-orange-600'>Home</li>
                    <li className='hover:text-orange-600 relative group '>Home 
                    <ul className='absolute hidden p-2 space-y-2 group-hover:block'>
                    <li className='hover:text-orange-600'>Home</li>
                    <li className='hover:text-orange-600'>Home</li>
                        </ul></li>
                    <li className='hover:text-orange-600 '>Home</li>
                    <li className='hover:text-orange-600 '>Home</li>
                    

                </ul>
 </nav>



   </div>
  )
}

export default NavBar
