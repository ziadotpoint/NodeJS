const amount=8;
if(amount<10)
    console.log('small');
else
    console.log('large');

    //globals 
    console.log(__dirname);
    console.log(__filename);
    //console.log(require);
    //console.log(module);
    //console.log(process);           
//setInterval(()=>{
   // console.log('hglkejr');
//},1000);


class SpaceShuttle{
    constructor(targetplanet){
        this.targetPlanet=targetplanet;
    }
}
var ze = new SpaceShuttle('jupiter');
console.log(ze.targetPlanet);

const names=require('./Module1');
console.log("from module : " + names.john);

const names5=require('./Module2');
names5.meth1('sdfsfsdf');

console.log((names5.items));
console.log(names5.singleperson);

/*const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our homepage');
    }
    else if(req.url==='/about'){
        res.end('heres our short story');
    } else {
    res.end(`<h1>oops!</h1>
    <p>we cant seem to find the page you are looking</p>
    <a href='/'>back home</a>`);
    }
});

server.listen(5000);
*/

var moment = require('moment');
var mydate = new Date();
var mycooldate = moment(mydate).format();
console.log(mycooldate);