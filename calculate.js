/**
 * 
 * 
 * 
 *  */ 

function hesapMakinesi(sayi1, sayi2, islemIsareti){

  let sonuc={}
    
    if( isNaN(sayi1) || isNaN(sayi2 )) {
    
     sonuc={
        hata:['error'],
        explain: 'not a number!!'
      }
      return sonuc;

    }

    else{
        if ( islemIsareti == '+'){
            sonuc = {
              islemSonucu:  sayi1+sayi2,
              secim: 'toplama',
             
    
                     }
               return sonuc;
            } 
        
        else if ( islemIsareti == '-'){
             sonuc = {
              islemSonucu:  sayi1-sayi2,
              secim: 'cikarma',
             
    
                     }
                return sonuc;
            }
        
        else if ( islemIsareti == '*'){
             sonuc = {
              islemSonucu:  sayi1*sayi2,
              secim: 'carpma'
    
                     }
                 return sonuc;
            }
        
        else if ( islemIsareti == '/'){
       
                 if(sayi2==0) 
                 { 
                      sonuc={
                         hata:['error'],
                         explain: 'second number equals to zero'
                     }
                 return sonuc
                }
                 else {
                     sonuc = {
                      islemsonucu:  sayi1/sayi2,
                      secim: 'bolme'
            
                             }
                 return sonuc;
            }
          }
    
        else {
            
            sonuc={
            hata:['error'],
            explain: 'sign is wrong!!'
        }
        return sonuc;
    }
    
    }
}
    
      const islemm = hesapMakinesi(45, 0,'/');
      console.log(islemm);
    
    //gelistirilecektir!!
    