const revStr = x => {
  if(typeof x !== 'string'){
    console.log(`Input harus string`)
  }else{
    let kata = x.toLowerCase();
    let newKata = kata.split('').reverse().join('')
    
    //use loop for
      // let newKata = '';
      //   for(let i = x.length-1; i>=0; i--){
      //     newKata = newKata + kata[i];
      // }
      
//kondisi
      if(newKata === kata){
          console.log('Palindrom');
      }else{
          console.log('bukan Palindrom')
      }
  }
}
revStr("KaSur RUsAk")
  
  
  
  
  
