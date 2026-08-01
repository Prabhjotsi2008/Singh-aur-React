import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {githubId} = useParams()
    const [data,setData] = useState({});

    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${githubId}`);
      const data = await response.json();
      console.log(data);
      setData(data);
    }

    useEffect(() => {
      fetchData();
    }, [])

  return (
    <div className='bg-gray-100 flex flex-col items-center gap-y-3 text-3xl font-semibold text-orange-700 my-2 py-4'>
      <p>User: {data.login}</p>
      <p>Followers: {data.followers}</p>
      <p>Repos: {data.public_repos}</p>
      <img src={data.avatar_url} className='rounded-full' width={300} />
    </div>
  )
}

export default User