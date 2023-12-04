import React from 'react'
import { Link } from 'react-router-dom'
import { BracketsCurly} from '@phosphor-icons/react'
import img1 from '../Assets/agency1.jpg'
import img2 from '../Assets/box4@2x-1.jpg'
import img3 from '../Assets/marketing-1.jpg'
import img4 from '../Assets/marketing-1.jpg'
import img5 from '../Assets/woman-showing-colleagues-new-business-strategy_85574-4198.jpg'
import img6 from '../Assets/fancy.jpg'
import img from '../Assets/group-busy-managers-during-morning-briefing_74855-4271.avif'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const testimonial =[
    {
        namee: "Fexed Price Model",
        
        text:"The Fixed Price Model is associated with a pre-determined project cost. it's ideal to use when you have well-define project requirement for the solution or application that you with to develop"

    },
    {
        namee: "On Site Development Model",
        
        text:"This model is a mix of the Onshore and Offshore models. it can be an ideal fit if you require both an onsite presence as well as remote support"

    },
    {
        namee: "Hire Dedicated Model ",
        
        text:"This model allows you to supplement you in-house team with resources supplied by our company. it allows for flexibility in scaling up teams based on seasonal demand and helps to cut associated with the full-time hiring of employees "

    },
]
const Home = () => {
    let idx=0;
   
  return (
    <div className='bg-white text-black'>
        <div className='grid gap-0 md:grid-flow-col'>
    <div  className='md:w-[900px] w-[400px]'>
        <p className='text-center font-medium  px-7'>OTTOX TECHNOLOGY LTD</p>
        <p className='md:text-center ml-12 md:ml-24  md:text-8xl text-5xl break-words'>Digital age solutions for</p>
        
        <p className='text-center font-medium md:text-8xl'>mobile apps</p>
        <p className='text-center md:ml-24 py-3 text-3xl text-zinc-700 break-words'>Passionate about solving problems through creative and digital products.</p>
    <div className='md:ml-32 mx-4'>
        <button className='bg-yellow-700 to-lime-600 hover:bg-indigo-700 font-bold mr-5 rounded-full p-5  text-center text-white '>GET A QUOTE</button> <button className='text-blue-700 text-clip text-lg '>DISCOVER US</button>
    </div>
    
    </div>
    <div className='py-2 w-[800px]'>
        <img className='px-2 md:w-[100%] w-[50%] md:left-4 h-full rounded-full md:mr-16 md:ml-8  duration-700' src={img} alt="jhdhd"/>
    </div>
        </div>
        <div className=' md:flex md:ml-32 ml-5 md:gap-48 my-16'>
         <div className='inline-flex gap-6 py-4'>
            <BracketsCurly size={30} className='text-black inline-flex'/>
    <div>
    <p className='  text-xl rounded-xl'>Internet Business</p>
    <div className='flex gap-7 py-3'>
<Link to="/" className='bg-sky-400  text-center text-blue-800 rounded-full'>Domain</Link>
<Link to="/" className='bg-sky-400 text-center text-blue-800 rounded-full'>Hosting</Link>
<Link to="/"className='bg-sky-400  text-center text-blue-800 rounded-full' >Server</Link>
<Link to="/" className='bg-sky-400  text-center text-blue-800 rounded-full'>SSL</Link>
                </div>
</div>

         </div>
         <div className='inline-flex gap-6 '>
         <BracketsCurly size={30} className='text-black inline-flex'/>
    <div>
                <p className='text-center w-44 text-xl rounded-xl'>Development </p>
                <div className='flex gap-7 py-3'>
<Link to="/" className='bg-sky-400 w-28 text-center  text-blue-800 rounded-full'>Web</Link>
<Link to="/" className='bg-sky-400 w-28  text-center text-blue-800 rounded-full'>App</Link>
</div>

</div>
         </div>
         <div className='inline-flex gap-6'>
         <BracketsCurly size={30} className='text-black inline-flex'/>
    <div>
  
   <p className=' text-center text-xl rounded-xl'>Digital Marketing</p>
   <div className='flex gap-7 py-3'>
   <Link to="/" className= 'bg-sky-400 w-16  text-center text-blue-800 rounded-full'>  SEO</Link>
<Link to="/" className='bg-sky-400  w-16  text-center text-blue-800 rounded-full'>SMO</Link>
<Link to="/" className='bg-sky-400  w-16  text-center text-blue-800 rounded-full'>SMM</Link>
<Link to="/" className='bg-sky-400  w-10 text-center text-blue-800 rounded-full'>SSL</Link>
   </div>
</div>

         </div>
        </div>
        <div className='grid md:grid-flow-col grid-flow-row ml-4'>
<div>
<img src={img1} className='h-[90%]' alt='wegjeheh'/>
<p className='-mt-16 md:text-center ml-2 font-semibold text-white'>For business and Startups</p>
<p className=' md:text-center ml-2 text-3xl md:text-4xl font-bold text-white'>Web Development</p>
</div>
<div className='md:py-7' >
<img src={img3} className='' alt='wegjeheh'/>
<p className='md:-mt-16 -mt-32 px-3 md:text-center font-semibold text-white' >For company and startups</p>
<p className=' md:text-center ml-2 text-3xl break-words  md:text-4xl font-bold text-white'>Mobile App Development</p>
</div>
<div className='py-3'>
<img src={img6} alt='wegjeheh'/>
<p className='md:-mt-16 -mt-32 px-2  md:text-center font-semibold text-white'>For business and E-commerce</p>
<p className=' md:text-center ml-2 text-3xl break-words font-bold text-white'>E-Commererce DEVELOPMENT</p>
</div>
<div className='py-3'>
<img src={img2} alt='wegjeheh'/>
<p className='md:-mt-16 -mt-32 md:text-center md:font-semibold text-white'>For Startups </p>
<p className=' md:text-center md:text-4xl  text-3xl font-bold text-white'>Technology Consultant</p>
</div>

     

        </div>
        <div className='bg-sky-200 grid-flow-row text-black grid md:gap-8 md:grid-flow-col'>
            <div className='py-16'>
<img className='md:ml-7 w-[390px]' src={img3} alt='#'/>
            </div>
            <div className='md:w-[900px] w-[390px]'>
            <Splide options={{perPage: 1, arrows :true, grag:'true'}}>
        {
       testimonial.map((item) =>{
        return(
           <SplideSlide>
            <div className='rounded-3xl relative'>
                <p className='p-4 md:w-[50%] py-5 w-60 md:items-center bg-orange-300 md:rounded-full font-bold '>OUR DEVELOPMENT MODEL</p>
            {/* <div className='absolute '> */}
                <p className='md:py-8  md:text-5xl text-center text-orange-700  font-bold  '>{item.namee}</p>
                <p className='text-black md:px-4  py-5 md:ml-12 break-words text-2xl'>{item.text}</p>
                {/* </div> */}
            </div>
           </SplideSlide>

        )
       })
        }
</Splide>
            </div>
       
        </div>
    </div>
  )
}

export default Home
