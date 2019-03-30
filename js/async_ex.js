// 1. Call helloCatAsync passing a callback function,
//    which will be called receiving the result from the async operation
console.log("1. function called...")

function getResult(result) {
    console.log("5. result is: ", result);
}

helloCatAsync(getResult, 'nya');

// 2. The "callback" parameter is a reference to the function which
//    was passed as argument from the helloCatAsync call
function helloCatAsync(callback, result) {
    console.log("2. callback here is the function passed as argument above...")
    // 3. Start async operation:
    setTimeout(function() {
    console.log("3. start async operation...")
    console.log("4. finished async operation, calling the callback, passing the result...")
        // 4. Finished async operation,
        //    call the callback passing the result as argument
        callback(result);
    }, 2000);
}
