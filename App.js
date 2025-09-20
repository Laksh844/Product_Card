import React from "react";
import "./App.css";

// ProductCard Component
function ProductCard({ name, price, status }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
}

// Main App Component
function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div className="container">
      <h2>Products List</h2>
      <div className="outer-box">
        <div className="products">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
