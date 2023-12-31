const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};  
const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};
const logSuccess = ({ id, time }) => {
  console.log(`Транзакція ${id} оброблена за ${time}ms`);
};
const logError = id => {
  console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
};
makeTransaction({ id: 70, сума: 150 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 71, сума: 230 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 72, сума: 75 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 73, сума: 100 })
  .then(logSuccess)
  .catch(logError);