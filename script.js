

//====Index Array=====
let indexarray = ['Riya', 'Riti' , 'Rati' ]
let element = indexarray.length;
// console.log(indexarray[0]);
// console.log(indexarray[1]);
// console.log(indexarray[2]);

for(i=0; i<element; i++){
    console.log(indexarray[i]);
}

// ====Two Dimentional Array=======Nested (Loop, Conditional Statement=====
// Example ---1
let towDimentionalArray = [
    [6, 5, 7, 8],
    [7, 4, 5, 9],
    [4, 6, 9, 8],
]

// console.log(towDimentionalArray[0][0]);
// console.log(towDimentionalArray[0][1]);
// console.log(towDimentionalArray[0][2]);
// console.log(towDimentionalArray[0][3]);

// console.log(towDimentionalArray[1][0]);
// console.log(towDimentionalArray[1][1]);
// console.log(towDimentionalArray[1][2]);
// console.log(towDimentionalArray[1][3]);

// console.log(towDimentionalArray[2][0]);
// console.log(towDimentionalArray[2][1]);
// console.log(towDimentionalArray[2][2]);
// console.log(towDimentionalArray[2][3]);

for(i=0; i<=2; i++){      //console.log(i);  //i=0, 1,2
    for(j=0; j<=3; j++){  // console.log(j);   //j= 0, 1, 2, 3, 4    j= 0, 1, 2, 3, 4   j= 0, 1, 2, 3, 4
        console.log(towDimentionalArray[i][j]);
    }           

}


// Example ---2
let class9 = [
    [60, 55, 75, 90],
    [30, 29, 89, 80],
    [45, 60, 95, 25],
]

for(i=0; i<=2; i++){
    if(i==0){
      console.log('Section-A');  
    }

    else if(i==1){
        console.log('Section-B');
    }

    else if(i==2){
        console.log('Section-C');
    }

    
    for(j=0; j<=3; j++){
        if(class9[i][j]>100){
           console.log(class9[i][j]+ ' '+ '= Invalid');
        }

        else if(class9[i][j]>=90){
            console.log(class9[i][j]+ ' '+'= A+');
        }

        else if(class9[i][j]>=70){
            console.log(class9[i][j]+' '+'= A');
        }

        else if(class9[i][j]>=60){
            console.log(class9[i][j]+' '+'= B+');
        }

        else if(class9[i][j]>=50){
            console.log(class9[i][j]+' '+'= B');
        }

        else if(class9[i][j]>=30){
            console.log(class9[i][j]+' '+'= C');
        }

        else{
           console.log(class9[i][j]+' '+'= F') 
        }
    }
}

