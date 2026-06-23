-- Scenario 1: Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

UPDATE Accounts
SET Balance = Balance * 1.01
WHERE AccountType = 'Savings';

COMMIT;

DBMS_OUTPUT.PUT_LINE(
        'Monthly interest applied to all Savings accounts.'
    );

END;
/

EXEC ProcessMonthlyInterest;

SELECT AccountID, AccountType, Balance
FROM Accounts
ORDER BY AccountID;



-- Scenario 2: Update Employee Bonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
IS
BEGIN

UPDATE Employees
SET Salary = Salary + (Salary * p_bonus_percent / 100)
WHERE Department = p_department;

COMMIT;

DBMS_OUTPUT.PUT_LINE(
        'Bonus applied successfully.'
    );

END;
/

-- Execute Procedure
EXEC UpdateEmployeeBonus('HR',10);

-- View Updated Employee Details
SELECT EmployeeID, Name, Department, Salary
FROM Employees
ORDER BY EmployeeID;



-- Scenario 3: Transfer Funds

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN

SELECT Balance
INTO v_balance
FROM Accounts
WHERE AccountID = p_fromAccount;

IF v_balance >= p_amount THEN

UPDATE Accounts
SET Balance = Balance - p_amount
WHERE AccountID = p_fromAccount;

UPDATE Accounts
SET Balance = Balance + p_amount
WHERE AccountID = p_toAccount;

COMMIT;

DBMS_OUTPUT.PUT_LINE('Transfer Successful');

ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

END IF;

END;
/

EXEC TransferFunds(1,3,500);

SELECT AccountID, AccountType, Balance
FROM Accounts
ORDER BY AccountID;