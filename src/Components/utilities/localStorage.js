

const addToDB=(id)=>{
    const storedCart=getStoredData();
    const quantity=storedCart[id];
    if(quantity){
      const newQuantity=quantity+1;
      storedCart[id]=newQuantity;
    }
    else{
      storedCart[id]=1;
    }
    localStorage.setItem('fruits-shop', JSON.stringify(storedCart));
}

const  getStoredData=()=>{
    let storedData={};
     const getData=localStorage.getItem('fruits-shop');
     if(getData){
        storedData=JSON.parse(getData);
     }
     return storedData;
}

// remove
const removeFromDb = ({cart}) => {
  console.log(cart);
  const shoppingCart = getStoredData();
  if(shoppingCart){
    localStorage.removeItem('fruits-shop');
  }
  
}

export {addToDB, getStoredData, removeFromDb}