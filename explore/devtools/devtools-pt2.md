1) The bug involed the two numbers being read as strings instead of numbers, resulting in a string concatenation instead of numerical addition.
2) I would explicitly convert the type of num1 and num2 to Number. See fix.png
