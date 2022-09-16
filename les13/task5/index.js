export const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.slice().reverse(); 
}

export const withdraw = (clients, balances, client, amount) => {
    let balancesIndex = clients.indexOf(client);
      if (balances[balancesIndex] < amount) {
          return -1;
      }
      return (balances[balancesIndex] - amount);       
  }

export const getAdults = obj => {
    const objRes = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      objRes[key] = obj[key];
    }
  }
  return objRes;
};