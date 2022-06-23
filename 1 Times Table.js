'use strict';



for(let i = 0; i < 10; i++) {
 
 
    for(let j = 0; j < 10; j++) {
 
 
        let value = (j +1) * (i +1);
        process.stdout.write(value.toString() + '\t');
    }


    console.log();                                              


}
