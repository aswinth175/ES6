// 1)With arg & with return 
function fun1(a, b) {
    let c = a + b
    return c
}
let d = fun1(3, 9)
console.log(d)

// 2)With arg & without return 
function fun2(e, f) {
    let g = e - f
    console.log(g) 
}
 fun2(3, 29)

 // 3)Without arg & with return 

 function fun3(){
    let h=10;
    let i=23;
    let j=10*23
    return j
 }
 let k=fun3()
 console.log(k)

  // 4)Without arg & without return 

  function fun4(){
    let l=10;
    let m=23;
    let n=10%23
    console.log(n)
  }
  fun4()