import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const heroName = ['Anwar Khan', 'Jafor Khan', 'Alamgir Khan', 'Salman Khan', 'Sohel Khan'];
  const filmName = ['Summer Night', 'Days of 71', 'Bengal Turn over', 'Fighter Gang'];
  const releaseYear = [2001, 2005, 2010, 2015]
  const directorName = ['Faruk Khan', 'Rashid Bannah', 'Fakrul Amin', 'Jhankar Mahbub'];
  const products = [
    {
      name: 'Photoshop', 
      price: '$90.99' 
    }, 
    {
      name: 'Illustrator', 
      price: '$299.99'
    },
    {
      name: 'InDesign', 
      price: '$199.99'
    },
    {
      name: 'Acrobat Pro', 
      price: '$299.99'
    },
    {
      name: 'Creative Cloud All Apps', 
      price: '$299.99'
    }
  ]
  // const heroNames = heroName.map(hero => hero);
  // console.log(heroNames);
  // const productNames = products.map(product => product.name);
  // console.log(productNames);
  // destructuring object
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To React World</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            heroName.map(hero => <li>{hero}</li>)
          }

          {
            products.map(product => <li>{product.name} ({product.price})</li>)
          }

          {/* <li>{heroName[0]}</li>
          <li>{heroName[1]}</li>
          <li>{heroName[2]}</li>
          <li>{heroName[3]}</li>
          <li>{heroName[4]}</li> */}
        </ul>
        {
          products.map(products => <Product products={products}></Product>)
        }
{/* first way */}
      {/* <Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>
      <Product name={products[2].name} price={products[2].price}></Product>
      <Product name={products[3].name} price={products[3].price}></Product>
      <Product name={products[4].name} price={products[4].price}></Product> */}

{/* second way */}
      <Product products={products[0]}></Product>
      <Product products={products[1]}></Product>
      <Product products={products[2]}></Product>
      <Product products={products[3]}></Product>
      <Product products={products[4]}></Product>

      <Person name={heroName[0]} film={filmName[0]} release={releaseYear[0]} director={directorName[0]}></Person>     
      <Person name={heroName[1]} film={filmName[1]} release={releaseYear[1]} director={directorName[1]}></Person>     
      <Person name={heroName[2]} film={filmName[2]} release={releaseYear[2]} director={directorName[2]}></Person>     
      <Person name={heroName[3]} film={filmName[3]} release={releaseYear[3]} director={directorName[3]}></Person>        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1 style={{border: '1px solid pink', backgroundColor: '#2F4F4F', borderRadius: '10px'}}>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)} style={{border: '1px solid pink', color: 'white', backgroundColor: '#800000', borderRadius: '10px', fontSize: '20px', margin: '5px', padding: '5px'}}>Decrease</button>
      <button onClick={() => setCount(count + 1)} style={{border: '1px solid pink', color: 'white', backgroundColor: '#008B8B', borderRadius: '10px', fontSize: '20px', margin: '5px', padding: '5px'}}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>Name: {user.name} Email: ({user.email})</li>)
        }
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle={
    border: '1px solid gray',
    margin: '5px',
    padding: '5px',
    borderRadius: '10px',
    backgroundColor: 'green',
    height: '250px',
    width: '450px',
    float: 'left'
  }
  // destructuring object
  const {name, price} = props.products;
  return (
    <div style={productStyle}>
{/* first way */}
      {/* <h2>{props.name}</h2>
      <h1>{props.price}</h1> */}
{/* second way */}
      {/* <h2>{props.products.name}</h2>
      <h1>{props.products.price}</h1> */}
{/* third way */}
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    width: '650px'
  }

  return (
  <div style={personStyle}>
      <h1>Film Industry Reward 2021</h1>
      <h3>Hero Name: {props.name}</h3>
      <h4>Film: {props.film}</h4>
      <h4>Release: {props.release}</h4>
      <h3>Director: {props.director}</h3>
  </div>
  ) 
}

export default App;
