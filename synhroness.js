// CallBack

function multi(d,e,div){
    let i=d*e
    console.log(i);
    return  div(i)
}
function div(i){
if(i%2==0)
{
console.log("even number");
}
else
{
console.log("odd number")
}
}
function display(a,b,c){
let x=c(a,b,div)
console.log(x);
}
display(7,2,multi)


//Promise

let as=new Promise((res,rej)=>{
    res("Aswinth")
})
as.then(console.log)
.catch(console.log)

//PromiseChaining

function one(){
	return new Promise((j,k)=>{
	setTimeout(()=>{
	j("Aswinth")
	},2000)
	})
	}
	function two(){
	return new Promise((j,k)=>{
	setTimeout(()=>{
	k("3")
	},4000)
	})
	}
	function three(){
	return new Promise((j,k)=>{
	setTimeout(()=>{
	j("Arun")
	},6000)
	})
	}
	one().then((ww)=>{
	console.log(ww)
	two().then((xx)=>{
	console.log(xx)
	})
	three().then((yy)=>{
	console.log(yy)
	})
	})
	.catch((zz)=>{
	console.log(zz)
	})


    //PromiseAll

    function one(){
        return new Promise((aa,bb)=>{
        bb("Ari")
        })
        }
        function two(){
        return new Promise((aa,bb)=>{
        aa("3")
        })
        }
        function three(){
        return new Promise((aa,bb)=>{
        aa("Arun")
        })
        }
    Promise.all([one(),two(),three()])
        .then(console.log)
        .catch(console.log)

        //Async/Await

        function one1() {
			return new Promise((n, o) => {
				n("Fabevy")
			})
		}
		function two2() {
			return new Promise((n, o) => {
				o("FED17")
			})
		}
		async function fun11() {
			try {
				let p = await one1()
				console.log(p)
				let q = await two2()
			}
			catch {
				console.log("Hii")
			}
		}
		fun11()