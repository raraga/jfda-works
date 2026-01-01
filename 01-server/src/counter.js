export function setupCounter() {
  let amount = 0

  const setCounter = (count) => {
    amount = count
    document.getElementById('message').innerHTML = amount
  }
  
  document.getElementById('add-btn').addEventListener('click', () => setCounter(amount + 1))
  document.getElementById('subtract-btn').addEventListener('click', () => setCounter(amount - 1))

  setCounter(0)
}
