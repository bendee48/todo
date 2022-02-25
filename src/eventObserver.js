const eventObserver = (()=> {
  const subscriptions = {};

  const subscribe = ({subName, funcToCall})=> {
    if (subscriptions[subName]) {
      subscriptions[subName].add(funcToCall);
    } else {
      subscriptions[subName] = new Set([funcToCall]);
    }
  }

  const run = (subName, ...args)=> {
    subscriptions[subName].forEach(func => {
      func.call(null, ...args);
    });
  }

  return { subscribe, run }
})();

export default eventObserver;