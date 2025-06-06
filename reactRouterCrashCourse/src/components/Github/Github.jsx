import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ashutosh31123')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

// The below function helps in getting the fetch once we hover around the Github navbar.
export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/ashutosh31123')
    return res.json();
}