function Max_palidrom() {
    let max_palid = 0;  
    let value;
    for (var i = 100; i < 1000; i++) {    
      for (var j = 100; j < 1000; j++) { 
        value = i * j;  
        if(value > max_palid){ 
            if(value.toString().split("").reverse().join("") === value.toString()){
                max_palid = value
            }
        }
      }
    }
    return max_palid;
  }
console.log(Max_palidrom());