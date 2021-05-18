import React from 'react';
import './App.css';
import NavButton from "./NavButton";
import Bag from "./Bags";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";


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
              tag = "Best seller"
              image= {bag1}
              name= "handy"
              price= {400}/>
              <Bag
              tag = "Best seller"
              image = {bag2}
              name = "stylish"
              price = {250}/>
              <Bag
              tag = "New collection"
              image = {bag3}
              name = "simple"
              price = {300}/>
              <Bag
              tag = "New collection"
              image = {bag4}
              name = "trendy"
              price= {150}/>

{/*              <article>
                  <span>Best seller</span>
                  <img src={bag1} alt="bag 1"/>
                  <p>The handy bag</p>
                  <h4>€400,-</h4>
              </article>
              <article>
                  <span>Best seller</span>
                  <img src="./assets/bag_2.png" alt="bag 2"/>
                  <p>The stylish bag</p>
                  <h4>€250,-</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img src="./assets/bag_3.png" alt="bag 3"/>
                  <p>The simple bag</p>
                  <h4>€300,-</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img src="./assets/bag_4.png" alt="bag 4"/>
                  <p>The trendy bag</p>
                  <h4>€150,-</h4>
              </article>*/}
          </main>
      </>
  );
}

export default App;



