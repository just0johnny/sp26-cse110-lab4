# Lab 4 Part 2 Responses

## Declaration Reponses
### Q1 Response:
At Line 12, it prints out "3", since the index variable is declared with the *var* declaration. So, as the for loop runs and *i* is incremented, it will remain as its final state and then be printed, which is 3.

### Q2 Response:
At Line 13, it prints out "150" due to the same sort of reasoning as the index variable. So at the last iteration of the for loop, *discountedPrice* is 300 * 0.5, and then since it is retained due to *var*, line 13 will print it out.

### Q3 Response:
Line 14 also prints out "150" because similarly to the last two, it is a function-scoped variable that gets updated each iteration of the for loop. On the last iteration, *finalPrice* is (150 * 100) / 100, which is still just 150.

### Q4 Response:
This function will return the array [50, 100, 150] since the function basically takes the original prices ([100, 200, 300]) and cuts them in half, then rounding (which it doesn't need to for these specific values), and placing them in an array variable to return.

### Q5 Response:
At line 12, since the variable *i* is declared with a *let* declaration, it only exists inside of the for loop. This means that the print statement at line 12 does not have access to the variable and will return an error.

### Q6 Response:
Similarly, at line 13, it will return an error because *discountedPrice* is only defined inside of the for loop, and trying to access it outside of the loop returns an error.

### Q7 Response:
At line 14, it will still print out "150" because the variable is defined outside of the if statement with a *let* declaration. Since it is in the same block as the print statement, the print statement doesn't return an error and instead is able to print "150", which is specifically 150 for the same reason as the *var* version.

### Q8 Response:
This version of the function will also return [50, 100, 150] for pretty much the same reasoning as the *var* version. It follows the same logic to get the array, and since *discounted* is declared in the same block as the return, there is no error with accessing.

### Q9 Response:
At line 11, it will return an error due to *i* being a *let* declaration, which means that outside of the for loop it cannot be accessed to be printed.

### Q10 Response:
At line 12, it will print "3", since *length* is defined with *let* on the same level as the print statement. Since the length is determined by the input, for the array [100, 200, 300], the length is 3.

### Q11 Response:
This function will return the array [50, 100, 150]. It essentially takes the original array, halves the cost, and then puts it into a new array to be returned.

## Data Types Responses
### Q12A Response:
alert(student.name)

### Q12B Response:
alert(student.major)

### Q12C Response:
student.greeting()

### Q12D Response:
alert(student['Favorite Teacher'].name)

### Q12E Response:
alert(student.courseLoad[0])

## Basic Operators & Type Conversion Responses
### Q13A Response:
The output is '32'. This happens since '2' is converted to a string and then it concatenates '3' and '2' together to be '32'.

### Q13B Response:
The output is 1. This happens since '3' is converted to a number and then 3 - 2 = 1.

### Q13C Response:
The output is 3. This happens since *null* is converted to 0 and then 3 + 0 = 3.

### Q13D Response:
The output is '3null'. This happens since *null* is converted to a string and then the two are concatenated together.

### Q13E Response:
The output is 4. This happens since *true* is converted into 1 and then 1 + 3 = 4.

### Q13F Response:
The output is 0. This happens since both *false* and *null* are converted into zeroes and then 0 + 0 = 0.

### Q13G Response:
The output is '3undefined'. This happens since *undefined* is converted to a string and then the two are concatenated together.

### Q13H Response:
The output is NaN. This happens since *undefined* is converted to NaN, which makes any operation result in NaN.

### Q14A Response:
The output is true. This happens since '2' is converted into 2, which 2 > 1 is true.

### Q14B Response:
The output is false. This happens since both values are strings, causing a string comparison to which '12' comes before '2' alphabetically, so '2' > '12'.

### Q14C Response:
The output is true. This happens since '2' is converted into 2, which 2 == 2 is true.

### Q14D Response:
The output is false. This happens since === means that there is no conversion, and then 2 does not equal '2'.

### Q14E Response:
The output is false. This happens since *true* is converted into 1, which 1 == 2 is false.

### Q14F Response:
The output is true. This happens since Boolean(2) is converted to true, which true === true is true.

### Q15 Response:
The difference between == and === is that == does type conversions while === does not do type conversions when checking for equality. This means that === strictly checks if they are the same value AND type already.

## Functions Responses
### Q17 Response:
The result of calling the function will be [2, 4, 6]. Basically, *doSomething* is the callback function that just doubles each value passed into it, and since we pass in the array [1, 2, 3] and return the values after running *doSomething*, we get the array [2, 4, 6].

## Interval & Timeout Responses
### Q19 Response:
The output of the code is 1 4 3 2.