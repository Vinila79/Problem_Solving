// 1, Write a program that takes number as input, print the sum of odd digits in the given number
//input: 54213
//output: 9

let num1=prompt("enter a number1: ");
sum_odd=0
for(i=0;i<num1.length;i++){
    if(num1[i]%2!=0){
        sum_odd=sum_odd+Number(num1[i])
    } 
}
console.log(`sum of odd digits=${sum_odd}`);

//2, Write a program to print the sum of even digits in the given numbers
//input:542
//output: 6


num2=prompt("enter a number2:")
even_sum=0;
 for(i=0;i<num2.length;i++){
    if(num2[i]%2==0){
        even_sum+=Number(num2[i]);
     }
    }
console.log(`sum of even digits=${even_sum}`);


//3, Write a program to print the difference between even sum and odd sum in the given number.
//input: 16534
//output:1

let num3=prompt("enter a number3: ");
even_sum=0;
odd_sum=0;
for(i=0;i<num3.lenght;i++){
    if(num3[i] % 2==0){
        even_sum=even_sum+Number(num3[i])
    }
    if(num3[i] % 2!==0){
        odd_sum = odd_sum + Number(num3[i])
    }
}
console.log(`Difference between odd_sum and even_sum = ${even_sum-odd_sum}`); 


//4, Write a program to print the largest sum between odd sum and even sum.
//input: 9474   //output: Odd sum is bigger   //input: 1658   //output: Even sum is bigger

num4=prompt("enter the number4: ")
odd_sum=0
even_sum=0
for(i=0;i<num4.length;i++)
    if(num4[i]%2==0){
         even_sum=even_sum+Number(num4[i])
    }
else{
        odd_sum=odd_sum+Number(num4[i])
 }
 if(even_sum>odd_sum){
    console.log("even sum is largest");
 }
 else{
    console.log("odd sum is largest") };



