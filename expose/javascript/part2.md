1) Line 12 will print i, which is 3, as i has no block scope
2) Line 13 will print discountedPrice, which is 150, as discountedPrice has no block scope
3) Line 14 will print finalPrice, which is 150, as finalPrice has no block scope
4) The function will return [50, 100, 150]: each execution of the for loop added an element to the discounted array which was half the value of the element in the same index in prices
5) Line 12 produces an error: i is only in the scope of the for loop
6) Line 13 produces an error: discountedPrice is only in the scope of the for loop
7) Line 14 will print finalPrice, which is 150, as finalPrice is declared in the same block as line 14 is in
8) Same as 4): each line of (non-commented) code only used variables within their block scope, so switching var with let didn't change anything
9) Line 11 produces an error: i is only in the scope of the for loop
10) Line 12 will print length, which is 3, as length is declared in the same block as line 12 is in
11) Same as 8): length was never reassigned, discountedPrice was removed before the next itteration of the for loop, and pushing to discounted did not count as reassigning it, so changing from let to const had no effect here
12) 
    1)  A: student.name
    2)  B: student[Grad Year]
    3)  C: student.greeting()
    4)  D: student[Favorite Teacher].name
    5)  E: student.courseLoad[0]
13) 
    1)  A: '32': 2 mapped to string '2'
    2)  B: 1: '3' mapped to number 3
    3)  C: 3: null mapped to number 0
    4)  D: '3null': null mapped to string 'null'
    5)  E: 4: true mapped to number 3
    6)  F: 0: false and null both mapped to number 0
    7)  G: 3undefined: undefined mapped to string 'undefined'
    8)  H: NaN: '3' mapped to number 3, undefined mapped to number NaN
14) 
    1)  A: true: '2' converted to 2
    2)  B: false: first character of '2' is greater than first character of '12'
    3)  C: true: '2' converted to 2
    4)  D: false: 2 and '2' are different types
    5)  E: false: true converted to 1
    6)  F: true: Boolean(2) is a boolean of value true, because 2 is "non-empty"
15) == converts one or both of the compared values to numbers if they aren't the same type, while === does not
16) See part2_question16.js
17) When modifyArray is first called, it creates an array newArr. Next, it enters a for-loop, where on the first itteration, the doSomething function is called back on the first element of the input array, doubling it, before pushing it to newArr. This is repeated two more times for the other elements of the input array until the for-loop finishes, at which point the function returns newArr, which in this case is [2,4,6].
18) See part2_question16.js
19) The console prints 1, then 4, then 3, then 2
