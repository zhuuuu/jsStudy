
console.log('a');
setTimeout(function () {
    console.log('b');
    setTimeout(function () {
        console.log('c');
        setTimeout(function () {
            console.log('d');
            setTimeout(function () {
                console.log('e');
                setTimeout(function () {
                    console.log('f');
                    setTimeout(function () {
                        console.log('g');
                    }, 1000);
                }, 3000);
            }, 1000);
        }, 5000);
    }, 2000);
}, 3000);


//原来版本
console.log('a');
setTimeout(function () {
    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        console.log('g');
                    }, 1000);
                    console.log('f');
                }, 3000);
                console.log('e');
            }, 1000);
            console.log('d');
        }, 5000);
        console.log('c');
    }, 2000);
    console.log('b');
}, 3000);



