function smallestCommons(arr) {
  arr.sort((a,b) => {return a-b})
  let min = arr[0] 
  let max = arr[arr.length-1];
  let l = 1;
  for(let i = max;i <= min;i--){
    
    if((max * l)%i === 0){

    }
      l=l++;
      i = max+1;
  }
  return max*l;
}


console.log(smallestCommons([1,5]))
