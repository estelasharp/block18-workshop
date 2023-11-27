//Testing Workshop


// A function called "multiplication"  returns the product of two input integers
function multiplication(x, y) {
	return x * y;
}

expect multiplication(5, 2) to be a number
expect multiplication(5, 2) to equal 10
expect multiplication("x", "y") to be an error
expect multiplication("x", 2) to be an error
expect multiplication(5, "y") to be an error

// A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
function concatOdds(array1, array2) {

}

// Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
// What should happen with unexpected inputs?
// What kinds of unexpected inputs should we worry about?
// What should happen when there are multiples of the same odd number in the arrays?
expect concatOdds([5, 4, 1, 7], [-2, 11, 6, 2, -1, 3]) returns [-1, 1, 3, 5, 7, 11]
expect concatOdds([5, 4, 1, 7], "array2") returns an error 
expect concatOdds("array1", [-2, 11, 6, 2, -1, 3]) returns an error 
expect concatOdds(string, string) returns an error
expect concatOdds([2, 4, 6], [0, 10]) to be [] 


function shoppingCart(array1, array2) {

}
// Functional Tests:
// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
// Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
//What should happen if the cart is empty?
if cart is empty, display the message "your cart is empty" 
//What needs to be shown to the user at each step of check out?
all items added to cart, price of each item, and total price for purchse should be shown to user each step of check out 
//What behaviors of this feature does the prompt miss or gloss over?
a prompt to user to create a new account, login to already existing account, or continue as guest
a prompt or box with different forms of payment (apple pay, add new card, visa, paypal, or other options)
a drop down for each item to track how many total of each item
a button to add more to the quantity or a delete button to remove item from cart in case you develop a serious case of shoppers remorse
unexpected inputs should prompt 'error' message and a button to point out error
wrong email, liminited quantity for purchase, wrong address, any wrong information
if logged in to your own account, buttons included should read, buy again, view item, track package, return or replace items, order details, and a purchse now or a buy now buttom

