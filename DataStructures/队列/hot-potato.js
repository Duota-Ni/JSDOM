//击鼓传花
import Queue from './queue.js'
function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const name = ['A','B','C','D','E','F']
const res = hotPotato(name,9)
res.eliminated.forEach(name => {
  console.log(`loser is ${name}`);
})
console.log(`winner is ${res.winner}`);