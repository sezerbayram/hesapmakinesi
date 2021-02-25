//islem isaretini lutfen string deger olarak girelim!!

function hesapMakinesi(sayi1, sayi2, islemIsareti){
    
    if( isNaN(sayi1) || isNaN(sayi2 )) {
    
    let sonuc={
        hata:['error'],
        explain: 'not a number!!'
      }
      return sonuc;

    }

    else{
        if ( islemIsareti == '+'){
            let sonuc = {
              islemSonucu:  sayi1+sayi2,
              secim: 'toplama',
             
    
                     }
               return sonuc;
            } 
        
        else if ( islemIsareti == '-'){
            let sonuc = {
              islemSonucu:  sayi1-sayi2,
              secim: 'cikarma',
             
    
                     }
                return sonuc;
            }
        
        else if ( islemIsareti == '*'){
            let sonuc = {
              islemSonucu:  sayi1*sayi2,
              secim: 'carpma'
    
                     }
                 return sonuc;
            }
        
        else if ( islemIsareti == '/'){
       
                 if(sayi2==0) 
                 { 
                     let sonuc={
                         hata:['error'],
                         explain: 'second number equals to zero'
                     }
                 return sonuc
                }
                 else {
                    let sonuc = {
                      islemsonucu:  sayi1/sayi2,
                      secim: 'bolme'
            
                             }
                 return sonuc;
            }
          }
    
        else {
            
            let sonuc={
            hata:['error'],
            explain: 'sign is wrong!!'
        }
        return sonuc;
    }
    
    }
}
    
      const islemm = hesapMakinesi(74, 13,'+');
      console.log(islemm);
    
    //gelistirilecektir!!
    