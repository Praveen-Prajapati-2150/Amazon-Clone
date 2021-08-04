import React from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroAugust21/Range_D_1x._CB663429839_.jpg"
        alt="img not working"
      />

      <div className="home__row">
        <Product
          style={{ backgroundColor: "white" }}
          id="1"
          title="Livzing 6 Tier Metal Plant Pot Stand Display Shelf Indoor Outdoor Flower Rack Holder - Planter Shelves - Home Garden Decor - White"
          rating={3}
          price={1999}
          image="https://m.media-amazon.com/images/I/51Kabb72T2L.jpg"
        />
        <Product
          id="2"
          title="MuscleBlaze Gold Gainer XXL (Chocolate Bliss, 2.7 kg / 5.9 lb, 27 Servings)"
          rating={4}
          price={3470.0}
          image="https://m.media-amazon.com/images/I/615YSxKHtLL._SX522_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)"
          rating={4}
          price={549}
          image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SX679_.jpg"
        />
        <Product
          id="4"
          title="HP 15 Thin & Light Ryzen 3-3250 Laptop, 4 GB RAM, 1TB HDD, 38.1 cms (15) FHD Screen, Windows 10, MS Office (15s-gr0006au)"
          rating={4}
          price={32990}
          image="	https://m.media-amazon.com/images/I/719F8WdfBzL._SX679_.jpg"
        />
        <Product
          id="5"
          title="SKAFA Floating Wall Mount Metal U Shape Shelf Book CD DVD Storage Display Bookcase Bookshelf Black Set of 2"
          rating={5}
          price={999}
          image="	https://m.media-amazon.com/images/I/7115l3J7ouL._SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="NK Furniture Solid Sheesham Wood Standard Sofa Set 5 Seater Furniture Wooden 5 Seater Sofa Set (3+1+1) Teak Wood Sofa Set Furniture | Home Living Room with Cushions - Teak Finish"
          rating={4}
          price={25000}
          image="	https://m.media-amazon.com/images/I/61vgbhfWuTL._SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
