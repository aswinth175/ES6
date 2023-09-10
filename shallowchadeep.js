// spread operator

let a=[1,2,3,4]
let b=[...a]
b.push(5)
console.log(a,b)


//JSON Stringify

let c={name:"Aswinth",Age:19}
let d=JSON.parse(JSON.stringify(c))
d.name="Ari"
console.log(c,d)

//Object assign

let e={name:"Dhoni",Game:"Cricket"}
let f=Object.assign({},e)
f.country="India"
console.log(e,f)