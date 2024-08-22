function countBs(s){
    let r = 0
    for(let i=0; i<s.length; i++)
        if(s[i]=="B")
            r++
    return r
}

function countChar(s,c){
    let r = 0
    for(let i=0; i<s.length; i++)
        if(s[i]==c)
            r++
    return r
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));