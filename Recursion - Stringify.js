let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj) {
    let a = obj["data"];
    a.val = a.val + "";
    return obj;
    // let keys = Object.keys(obj);

    // if(keys.length == 0) return;
    // else if(typeof obj[keys[0]] == "number") obj[keys[0]] = keys[0].toString();
    // else if(typeof obj[keys[0]] == "object") stringifyNumbers(keys[0]);

    // stringifyNumbers(obj);
}

console.log(stringifyNumbers(obj));

/*
    {
        num: "1",
        test: [],
        data: {
            val: "4",
            info: {
                isRight: true,
                random: "66"
            }
        }
    }
*/