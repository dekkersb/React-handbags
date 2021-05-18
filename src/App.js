import React from 'react';
import './App.css';

import NavButton from "./NavButton";
import Bag from "./Bags";
import Tile from "./Tile";

import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourstory from "./assets/our_story.png";


function App() {
  return (
      <>
          <header>
          <h1>Handbags & Purses</h1>
          </header>

              <nav>
                  <NavButton
                  description="to the collection"/>
                  <NavButton
                  description="shop all bags"/>
                  <NavButton
                  description="pre-orders"
                  isDisabled={true}/>
        </nav>

          <main>
              <Bag
              bestseller ={true}
              image= {bag1}
              name= "handy"
              price= {400}
              />
              <Bag
              bestseller ={true}
              image = {bag2}
              name = "stylish"
              price = {250}
              />
              <Bag
              bestseller = {false}
              image = {bag3}
              name = "simple"
              price = {300}
              />
              <Bag
              bestseller = {false}
              image = {bag4}
              name = "trendy"
              price= {150}
              />
          </main>

          <footer>
              <Tile
              title="THE BRAND"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate impedit ipsa ipsum, laboriosam officia porro provident quae quam saepe sapiente voluptas? Ab accusamus at consequuntur corporis cum deserunt eligendi, ex facere id ipsam ipsum iure labore magnam magni maiores modi non quibusdam quis reiciendis repellat reprehenderit sunt suscipit velit."
              />
              <Tile
              image={brand} altImage={"OUR BRAND"}
              />
              <Tile
                  image={ourstory} altImage={"OUR STORY"}
              />
              <Tile
              title="OUR STORY"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda, consequatur, cum cupiditate esse ex id illum inventore itaque laudantium magni molestias neque perferendis, quasi quibusdam rerum temporibus? Ab eaque eos fuga fugiat natus quam quidem tempore tenetur! Cum doloribus eaque illum inventore nulla numquam placeat ratione saepe vitae."
              />
          </footer>
      </>
  );
}

export default App;



