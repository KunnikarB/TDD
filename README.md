# TDD Project

This is a practice project to learn Test-Driven Development (TDD) using JavaScript.

## Testing
- This project uses Jest for testing. To run the tests:
  - npm test
    
<img width="550" height="163" alt="learnTDD" src="https://github.com/user-attachments/assets/b42f7765-6beb-4502-9416-be2c938d1081" />

---

## Jest TDD Assignments
 5 Test-Driven Development (TDD) exercises implemented using Jest.
  1. Date Formatter
  2. Simple Password Validator
  3. Shopping Cart Totaler
  4. Array Uniquer
  5. Simple String Calculator

### 🌸 Date Formatter 🌸
- Format a date object or string as MM/DD/YYYY
  - Test 1. : Return '' for null or undefined.
  - Test 2. : Format new Date('2025-11-06') Return '11/06/2025'.
  - Test 3. : Test multiple dates to ensure generic logic.

<img width="304" height="160" alt="DateFormatter" src="https://github.com/user-attachments/assets/de15f0e1-d9fc-4f79-b399-fdebdf30a69a" />

### 🌸 Password Validator 🌸
- Validate a password based on length and containing number.
  - Test 1: Return false if the password is less than 8 characters long.
  - Test 2: Return false if the password does not contain at least one number.
  - Test 3: Return true if the password is 8+ characters and contains at least one number. 

<img width="292" height="165" alt="passwordValidator" src="https://github.com/user-attachments/assets/a2f2c1bc-3c22-4e18-bc11-a82a56b72156" />

### 🌸 Shopping Cart 🌸
- Calculate the total cost of a list of items (price * quantity).
  - Test 1: Return 0 for an empty array input.
  - Test 2: Return total cost of a single item.
  - Test 3: Return total cost for multiple items.

<img width="294" height="175" alt="shoppngCart" src="https://github.com/user-attachments/assets/49e1a658-f7f4-44d8-b493-cc796cc3c0c8" />

### 🌸 Array Uniquer 🌸
- Removes duplicate values from an array of numbers.
  - Test 1: Return original array if no duplicates.
  - Test 2: Return array with only unique values. ([1, 1, 2, 3, 2] return [1, 2, 3]
  - Test 3: Handle and remove multiple sequential duplicates. ([5, 5, 5] return 5)

<img width="294" height="175" alt="arrayUniquer" src="https://github.com/user-attachments/assets/0567cfab-557a-4952-b954-9453b0f8c71c" />

### 🌸 String Calculator 🌸
- Sum numbers provided in a comma-separated string.
  - Test 1: Return 0 for empty string.
  - Test 2: Return the number itself for single input.
  - Test 3: Return sum for two numbers.

<img width="308" height="181" alt="stringCalculator" src="https://github.com/user-attachments/assets/bb8e27e5-56e1-4483-b862-f861db5d3223" />




