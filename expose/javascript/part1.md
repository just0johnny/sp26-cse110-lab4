# Lab 4 Part 1 Responses

## "var" Declaration
### Q1 Response:
Line 9 prints "values added: 20".

### Q2 Response:
Line 13 prints "final result: 20".

### Q3 Response:
Generally, you should not use *var* because it is function-scoped as opposed to block-scoped. This means that when a variable is defined with *var*, it exists within the entire function instead of only inside certain blocks (like if statements, loops, etc.). This can cause naming conflicts and other issues that arise from that.

## "let" Declaration
### Q4 Response:
Line 9 prints "values added: 20".

### Q5 Response:
Line 13 returns an error, due to the result variable being defined inside the if statement with *let*, meaning that it doesn't exist outside of the if statement.

## "const" Declaration
### Q6 Response:
Line 9 won't print since line 7 returns an error. Due to result being defined as constant, line 7's attempt to modify result will cause an error, and line 9 won't print because of that.

### Q7 Response:
Line 13 returns an error due to a similar reason as *let*, since the variable being defined inside the if statement with *const* means that it doesn't exist outside of the if statement.