/*
How do we figure out the best test case?
- The length will be the smaller of the two elements
- The width will be the distance between the two elements
- You can get this value by subtracting the indices of the two elements
- Multiply the length by the distance to get the largest area
- This is a maximum value question, whereas the previous one was done once we found an answer
- Just because we find two values that form a container, does not necessarily mean it is the best container
- In the case of the minimum value, it will test for the lowest amount of water a container can hold
*/

//TEST CASES
/* 
               0 1 2 3 4
Array given = [7,1,2,3,9]
4-0 = 4 distance
7*4 = 28 for the area
[] = Retun 0
[7] = Return 0

               0 1 2 3 4
Array given = [6,9,3,4,5,8]
6*5 = 30 for first container found
8*4 = 32, Return [8,9] for best container
*/