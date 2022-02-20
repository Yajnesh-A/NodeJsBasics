const url = require('url');

let localUrl = new URL('http://yajnesh.com:8080/home.html?id=10&status=active');

//Get the serialized url
console.log(localUrl.href);
console.log(localUrl.toString());

//To get host(root domain) includes port number
console.log(localUrl.host);

//TO get host name does not include port number
console.log(localUrl.hostname);

//To get path name
console.log(localUrl.pathname);

//Serialized query
console.log(localUrl.search);

//Param object
console.log(localUrl.searchParams);

//add params to query
localUrl.searchParams.append("name","Yaju");
console.log(localUrl.href);
console.log(localUrl.search);

//Loop through params
localUrl.searchParams.forEach((name,value) => {
    console.log(`${name}: ${value}`)
})