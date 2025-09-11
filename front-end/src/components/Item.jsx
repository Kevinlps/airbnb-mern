import React from 'react'

const Item = () => {
  return (
    <a href='/' className='flex flex-col gap-2'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59m0B4OXxc8zCvSSZlUPMEfzOazhaiJkq1w&s" 
      alt="Imagen da acomodação" 
      className='aspect-square object-cover rounded-2xl'
      />
      <div>
        <h3 className='text-xl font-semibold'>Cabo Frio, Rio De Janeiro</h3>
        <p className='truncate text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo, magni in, commodi cum debitis quas eos optio maxime omnis corrupti? Corrupti omnis ab vero non praesentium nesciunt eos quae?</p>
        <p>
          <span className='font-semibold'>R$550</span> por noite
        </p>
      </div>
    </a>
  )
}

export default Item