//islem isaretini lutfen string deger olarak girelim!!

function hesapMakinesi(sayi1, sayi2, islemIsareti){
    
    if( isNaN(sayi1) || isNaN(sayi2 ))console.log('string deger girdiniz lutfen number giriniz!!');
    else{
        if ( islemIsareti == '+'){
            let sonuc = {
              islemSonucu:  sayi1+sayi2,
              secim: 'toplama'
    
                     }
               return sonuc;
            } 
        
        else if ( islemIsareti == '-'){
            let sonuc = {
              islemSonucu:  sayi1-sayi2,
              secim: 'cikarma'
    
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
        
        else if ( islemisareti == '/'){
       
                 if(sayi2==0) console.log('ikinci sayi sifira esit.Bu yuzden sonuc belirsizdir');
                 else {
                    let sonuc = {
                      islemsonucu:  sayi1/sayi2,
                      secim: 'bolme'
            
                             }
                 return sonuc;
            }
          }
    
        else console.log('boyle bir islem bulunamadi!!');
    }
    
    }
    
      const islemm = hesapMakinesi(74,  4,'+');
      console.log(islemm);
    
    //gelistirilecektir!!
    