array = [10, 15, 25]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

// SIMPLE FOR LOOP
for(i=0;  i<10; i++){
    console.log(i)
}

// ALTERNATE APPROCH
var i = 1

for( ; i<10; i++){
    console.log(i)
}

// With each iteration of the loop, i is incremented by 1 using i++, and then its value is printed using console.log(i). The loop continues until i reaches 10.
var i = 1

for( ; i<10; ){
    i++;
    console.log(i)
}


for(i=0;  i<10; i++){
    if (i==2) {
        break;
    }
    console.log(i, "BREAK")
}