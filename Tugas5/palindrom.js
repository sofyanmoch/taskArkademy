const revStr = x => {
    let kata = x;
      let newKata = '';
        for(let i = x.length-1; i>=0; i--){
          newKata = newKata + kata[i];
      }
            if(newKata === kata){
              console.log('Palindrom');
            }else{
        console.log('bukan Palindrom')
      }
  }
revStr("aadaa")
  
  
  
  
  