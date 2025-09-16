// "use client"
// import React, { useState } from 'react'
// import Header from "../Components/Header"

// const page = () => {
//   const [user, setUser] = useState("Shivam")
//   const [edit, setEditor] = useState("Akarsh")
//   return (
//     <>
//     <Header user = {user} edit = {edit}/>
//     </>
//   )
// }

// export default page

// import React from 'react'
// import Header from '@/Components/Header'
// // import Link from 'next/link'

// const page = () => {
//   return (
//     <div>
//       {/* <h1>This is Home Page</h1>
//       <a href='/About'>About</a>
//       <a href='/Product'>Product</a>
//       <a href='/Courses'>Courses</a> */}

//       <h1>This is Home Page</h1>

//       {/* <Link href="/About" >About</Link>
//       <Link href="/Product" >Product</Link>
//       <Link href="/Courses" >Courses</Link> */}



//     </div>
//   )
// }

// export default page

"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

export const page = () => {
  const [Images, setImages] = useState([])

  useEffect(() => {
    getImages()

  }, [])
  
  const getImages = async()=> {
    
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImages(data)
      console.log(Images)

    } catch (error) {
      console.error("Error Fetching Images");
      
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-800 text-white font-bold'>Get Images</button>
      <div className ='p-10'>
        {Images.map((elem,i)=>{
          return <img
          key = {i}
          src={elem.download_url}
          width={300}
          height={300}
          className='m-10 rounded inline-block'
          />
        })}
      </div>
    </div>
  );
};

export default page