const result = promiseFunction().then((result)=>{
    console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}!`)
});
