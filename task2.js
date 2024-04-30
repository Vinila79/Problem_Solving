//1) Program to print 1 to num, num to 1, -1 to -num, -num to -1 by using while loop.
// num=prompt("enter upto number: ")

//To print 1 to num
// num=5
// let i1=1;
// while (!(i1>=num+1)) {
//     console.log(i1)
//     i1++
// }

//To print num to 1

// num=5
// let i2=num;
// while (!(i2<=0)) {
//     console.log(i2)
//     i2--
// }

//To print -1 to -num
// num=-5
// let i3=-1;
// while (!(i3<=num-1)) {
//     console.log(i3)
//     i3--
//  }

 //To print -num to -1

//  num=-5
//  let i4=num;
//  while(!(i4>=0)){
//     console.log(i4)
//     i4++
//  }


 //2) Write a program to find the largest prime in the given number
//input: 46537
//output: 7
// num=prompt("enter a number: ")
// num="46537"
// max=0;
// for(n of num){
//     if(n>1){
//         c=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c=false
//                 break
//             }
//         }
//         if(c){
//         if(max<n)
//             max=n;
        
//     }
// }
// }
// console.log("The largest prime number is:"+max);

//3) Write a program to print the sum of largest and smallest prime digits in the given number
//input: 5497351
//output: 10
// num="46537"
// max=0;
// min=num[0];
// for(n of num){
//     if(n>1){
//         c=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c=false
//                 break
//             }
//         }
//         if(c){
//         if(max<n)
//             max=Number(n);
//         if(min>n)
//             min=Number(n);   
//     } 
// }
// }
// console.log("The largest prime number is:"+max);
// console.log("The smallest prime number is:"+min);
// console.log("The sum of largest and smallest prime numbers is:",max+min);

//4) Write a program to print the largest non prime digit in the given number
//input: 463482
//output: 8
num="463482"
max=0;
min=num[0];
for(n of num){
    if(n>1){
        c=true
        for(i=2;i<n;i++){
            if(n%i==0){
                c=false
                if(max<n)
                max=Number(n);
                break
            }
    }
}
}
console.log("The largest Non prime number is:"+max);