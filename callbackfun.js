function sum(num){
    let rem=0;
    let sum=0;
    while(num>0){
        let rem=num%10;
        sum=sum+rem
        num=parseInt(num/10)
    }
    return sum
}
function display(num){
    let d=sum(num);
    console.log(d)
}
display(792)