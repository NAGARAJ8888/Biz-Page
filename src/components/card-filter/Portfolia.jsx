import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaLink } from "react-icons/fa";

const cards = [
  { id: 1, category: "APP", name: "App 1", img: "img/laptop.jpg" },
  { id: 2, category: "APP", name: "App 2", img: "img/laptop.jpg" },
  { id: 3, category: "APP", name: "App 3", img: "img/laptop.jpg" },
  { id: 4, category: "APP", name: "App 4", img: "img/laptop.jpg" },
  { id: 5, category: "CARD", name: "Card 5", img: "img/laptop.jpg" },
  { id: 6, category: "CARD", name: "Card 6", img: "img/laptop.jpg" },
  { id: 7, category: "WEB", name: "Web 7", img: "img/laptop.jpg" },
  { id: 8, category: "WEB", name: "Web 8", img: "img/laptop.jpg" },
  { id: 9, category: "WEB", name: "Web 9", img: "img/laptop.jpg" },
];

export const Portfolia = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const visibleCards = filteredCategory === "All" ? cards : cards.filter(card => card.category === filteredCategory);

  return (
    <div id="portfolio" style={{scrollMarginTop: "30px"}}>
        <div className='text-center'>
        <h2 className='fw-bold pt-5 pb-3 heading-with-underline' >PORTFOLIO</h2>
    </div>
    <div className="container py-4">
      <div className="d-flex gap-3 mb-4 justify-content-center">
        <button className="btn" style={{backgroundColor:"#35ca23", color:"white"}}  onClick={() => setFilteredCategory("All")}>
          All
        </button>
        <button className="btn" style={{backgroundColor:"#35ca23", color:"white"}} onClick={() => setFilteredCategory("APP")}>
          APP
        </button>
        <button className="btn" style={{backgroundColor:"#35ca23", color:"white"}} onClick={() => setFilteredCategory("CARD")}>
          CARD
        </button>
        <button className="btn" style={{backgroundColor:"#35ca23", color:"white"}} onClick={() => setFilteredCategory("WEB")}>
          WEB
        </button>
      </div>

      <div className="row g-3">
        {visibleCards.map((card, index) => (
          <div key={card.id} className="col-md-4">
            <div className="card border rounded shadow-sm fade-in" style={{ animationDelay: `${index * 300}ms` }}>
            <div className="image-container">
                <img src={card.img} className="card-img-top" alt={card.name} />
                <div className="overlay">
                  <FaPlus className="icon" />
                  <FaLink className="icon" />
                </div>
              </div>
              <div className="card-body text-center">
                <p className="card-text fs-5 fw-bold">{card.name}</p>
                <p className="p-0 text-muted">{card.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.8) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }

          .fade-in {
            animation: fadeIn 0.7s ease-in-out forwards;
          }
             .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .image-container:hover .overlay {
            opacity: 1;
          }

          .icon {
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
          }
        `}
      </style>
    </div>
    </div>
  );
}
