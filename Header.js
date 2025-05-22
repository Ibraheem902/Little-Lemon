import { useState } from "react";
import Reastaurant from "./restaurant.jpg"
import './Header.css';
import BookingForm from './BookForm';
function Header(){
  const [showForm,setShowForm]=useState(false);
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <pre>Welcome to our restaurant in Chicago. 
            We prefer every food you want to be happy.</pre>
            <a href='#booking'><button className="reserve-button">Reserve a Table</button></a>
        </div>

        {/* صورة جانبية أو داخل القسم */}
        <div className="header-image-section">
          <img src={Reastaurant} alt="Restaurant View" className='header-image'/>
          
          <button className="delivery-button">Order Delivery</button>

        </div>
      </div>
    </header>
  );
};

export default Header;