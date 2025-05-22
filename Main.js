
import BookingForm from './BookForm';
import { useReducer } from 'react';
import './Main.css';
import Salad from "./greek salad.jpg"
import Dessert from "./lemon dessert.jpg"
import Food from "./restauranfood.jpg"
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Reducer function to update times based on date
const updateTimes = (state, action) => {
  // For now, always return same times regardless of date
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};
const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const specials = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description: "The best salad with great taste.",
      image:Salad
    },
    {
      name: "Bruchetta",
      price: "$5.99",
      description: "This is the best dish in our menu.",
      image:Food
    },
    {
      name: "Lemon Dessert",
      price: "$5.99",
      description: "This is the best dish in our menu.",
      image:Dessert
    }
  ];

  return (
    <main>

      {/* Specials Section */}
      <section className="specials-container">
        <h2>Specials</h2>
        <div className="specials-grid">
          {specials.map((item, index) => (
            <div key={index} className="special-card">
              <img src={item.image} alt={item.name} className="special-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className='price'><strong>{item.price}</strong></p>
            </div>
          ))}
        </div>
        <h2>Book a Table</h2>
        <section id='booking'>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </section>
      </section>
    </main>
  );
};

export default Main;