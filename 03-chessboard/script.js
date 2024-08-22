(()=>{
    let size = 8
    let s = ""
    for(let j=0;j<size;j++){
        if(j%2){
            for(let i=0;i<8;i++){
                s += (i % 2) == 0 ? "#" : " "
            }
        }
        else{
            for(let i=0;i<size;i++){
                s += (i % 2) == 0 ? " " : "#"
            }
        }
        
        s+="\n"
    }
    console.log(s)
})()