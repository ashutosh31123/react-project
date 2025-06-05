import React from 'react'

function Card({username="Rakesh"}) {
  return (
    <>
        <figure>
            <img class="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FB2wj4Krg9sCwWL7Nrj-dMytMvTn0_zR6g&s" alt="Card Image"/>
        </figure>
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2"> {username} </h2>
            <p class="text-gray-600">This is a description of the card. It can contain details about the image or anything else.</p>
        </div>
    </>
)
}

export default Card