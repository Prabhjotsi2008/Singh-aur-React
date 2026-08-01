import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    console.log(data)
    // const [data,setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/prabhjotsi2008')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className="flex flex-col items-center gap-y-3 m-4 bg-gray-100 text-orange-600 p-4 text-3xl">Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github-pic" height={300} className='rounded-full'/>
    </div>
  )
}

export default Github


export const githubLoader =  async () => {
    const response = await fetch("https://api.github.com/users/prabhjotsi2008");
    return response.json();
}