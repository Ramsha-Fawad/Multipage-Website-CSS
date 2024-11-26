import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const HandBags = () => {
  const HandBagData = [
    { id: 1, name: 'RTW Creation', price: 2399, description: 'Off-White handbag with flower charm', image: '/pic1.jpg' },
    { id: 2, name: 'GALAXY BAGS', price: 3000, description: 'Green Ladies Bag', image: '/pic2.jpg' },
    { id: 3, name: 'Stylon', price: 2499, description: 'Stylish Luxury handbags', image: '/pic3.jpg' },
    { id: 4, name: 'Global Collection', price: 10542, description: 'Luxury handbag', image: '/pic4.jpg' },
    { id: 5, name: 'BM Fashion', price: 1999, description: 'Women Raven 2 pcs handbag', image: '/pic5.jpg' },
    { id: 6, name: 'RTW Creation', price: 2999, description: 'Blue Workplace handbag', image: '/pic6.jpg' },
  ];

  return (
    <div>
      <div className='handbags'>
        {HandBagData.map((handbag) => (
          <div key={handbag.id} className='handbag-card'>
            {/* Use the Next.js Image component */}
            <Image
              src={handbag.image}
              alt={handbag.name}
              width={300} // Specify width
              height={300} // Specify height
            />
            <h3>{handbag.name}</h3>
            <p>{handbag.description}</p>
            <div className='price'>Rs.{handbag.price} PKR</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandBags;
