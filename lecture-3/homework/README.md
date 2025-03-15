Shopping Cart Total Calculator

Write a program that simulates a simple shopping cart calculator. Your program should:
- Repeatedly prompt the user to enter the price of an item
- If the user enters a negative number or a non-number value, display an alert saying "Invalid price, try again!" and skip adding that input
- Continue prompting until the user clicks cancel 
- Calculate the total cost of the entered items
- After the user finishes entering prices, use an if statement to check the total:
  - If the total is greater than 100, alert "Your total is Rs X. You qualify for a discount!"
  - Otherwise, alert "Your total is $X."
- Write a function named calculateTotal that handles the price-collecting loop and returns the total
