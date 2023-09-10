// map method
 
	let x=[{a:1},
			 {b:2}]
	let y=x.map((value,index)=>{
	return {...value,c:3}
	})
	console.log(y);

    // Filter Method

	let aa=[3,9,7,6,2,24];
	let cc=aa.filter((a,b)=>{
	return aa%2==0
	})
	console.log(cc);

    //Find Method

    let d=[{name:"Aswinth",position:"fresher"},
			 {name:"santhosh",position:"fresher"},
			 {name:"durga",position:"junior"},
			 {name:"kalai",position:"midler"}]
	
	let e=d.find((v,i)=>{
	return v.position=="fresher";
	})
	console.log(e);

    //Every Method

    let f=[{name:"Aswinth"},{age:19},
			 {name:"santhosh"},{age:27},
			 {name:"durga"},{age:22},
			 {name:"kalai"},{age:22}]
	
	let g=f.every((value,index)=>{
	return value.age>20	;
	})
	console.log(g);

    //Some Method

    let h=[{age:19},
        {age:27},
        {age:22},
        {age:22}]
 
 let i=h.some((value,index)=>{
 return value.age>20	;
 })
 console.log(i);

 // Reduce method

 let j=[2,3,6,7,9]
	let k=j.reduce((r,s)=>{
	return r+s
	},5)
	console.log(k);

    //Sort Method

    let l=[{age:10},{age:15},{age:1},{age:8}]
	let m=l.sort((re,rs)=>{
	return re.age-rs.age
	})
	
	console.log(m);

