import React, { useState } from 'react';

const App = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [itemPrices, setItemPrices] = useState({});
  const [inventory, setInventory] = useState([]);

  const setItemPrice = () => {
    const itemPrice = parseFloat(price);
    if (isNaN(itemPrice) || itemPrice <= 0) {
      setMessage("Error: Price must be a number greater than zero");
      return;
    }
    setItemPrices({ ...itemPrices, [itemName]: itemPrice });
    setMessage(`Amount of ${itemName} set to ${price} ETH`);
  };


  const purchaseItem = () => {
    const itemPrice = itemPrices[itemName];
    if (itemPrice === undefined) {
      setMessage(`Error: Price is not set for ${itemName}`);
      return;
    }

    const item = { name: itemName, price: itemPrice };
    setInventory([...inventory, item]);
    setMessage(`Thank you for your partonage ${itemName} for ${itemPrice} ETH`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Courier New', background: 'transparent' }}>
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '20px', border: '5px solid #000', borderRadius: '15px', backgroundColor: 'rgb(88,88,88)' }}>
        <h1 style={{ color: '#ccc', textAlign: 'center' }}>MyOwnGames</h1>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Name of Game " 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px',fontFamily: 'Courier New', width: 'calc(50% - 10px)' }}
          />
          <input 
            type="text" 
            placeholder="Amount in ETH" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px',fontFamily: 'Courier New', width: 'calc(50% - 10px)' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={setItemPrice} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#000', color: '#ffffff', cursor: 'pointer', fontSize: '14px',fontFamily: 'Courier New', marginRight: '10px' }}
          >
            Set Item Price
          </button>
          <button 
            onClick={purchaseItem} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#000', color: '#ffffff', cursor: 'pointer', fontSize: '14px',fontFamily: 'Courier New', marginLeft: '10px' }}
          >
            Purchase Item
          </button>
        </div>
        <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#ccc', textAlign: 'center' }}>{message}</p>
        <div>
        <h2 style={{ color: '#ccc',fontFamily: 'Courier New'}}>PurchaseItem</h2> 
          <ul>
            {inventory.map((item, index) => (
              <li key={index}>{item.name} - {item.price} ETH</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
