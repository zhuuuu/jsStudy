console.log('a');
setTimeout(function () {
    console.log('b');
    setTimeout(function () {
        console.log('c');
    }, 2000);
}, 3000);




