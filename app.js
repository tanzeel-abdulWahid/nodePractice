//// !Path module

// const path = require('path');
// console.log(path.sep);

// const filePath = path.join("/content","subfolder","test.txt");
// console.log("File path =",filePath);

////?returns last portion of path
// const base = path.basename(filePath);
// console.log("Base =", base);

////? returns directory part of path;
// console.log("Directory path =", path.dirname(filePath));

// const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');
// console.log(absolute);

//// !File System (Sync)

// const {readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');

// console.log(first,second)

//// *Flag a is to append
// writeFileSync('./content/first.txt',`this is the first.txt file`,{flag:'a'});

//// !File System (Asynchronous);

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
                console.log(err)
                return
        }
        const first = result
        readFile('./content/second.txt', 'utf8', (err, result) => {
                if (err) {
                        console.log(err)
                        return
                }
                const second = result
                writeFile(
                        './content/result-async.txt',
                        `Here is the result : ${first}, ${second}`,
                        (err, result) => {
                                if (err) {
                                        console.log(err)
                                        return
                                }
                                console.log('done with this task')
                        }
                )
        })
})