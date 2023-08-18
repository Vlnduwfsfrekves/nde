function delay(ms){
    return new Promise(resolve=>
        setInterval(()=>{resolve(ms)},ms)
    )
}
const logger = time => console.log(`Вирішено після ${time}ms`);
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);