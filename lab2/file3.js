import { readFile, writeFile, appendFile, unlink} from 'fs/promises';


const writeData= async (fname, contents) => {
await writeFile(fname, contents);
console.log("file written successfully");
};


const readData= async (fname) => {
const data = await readFile(fname, "utf-8");
console.log("file contents");
console.log(data);
};


const appendData= async (fname, contents) => {
    await appendFile(fname, contents);
};

await writeData("happy.txt", "Hello World");
await readData("happy.txt");
await appendData("happy.txt", "FSD IS GOOD");
await deleteFile("happy.txt");