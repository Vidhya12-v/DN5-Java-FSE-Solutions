-- Scenario 1: Age > 60 discount
DECLARE
CURSOR c1 IS
SELECT c.CustomerID, c.DOB, l.LoanID
FROM Customers c
         JOIN Loans l ON c.CustomerID = l.CustomerID;

v_age NUMBER;
BEGIN
FOR rec IN c1 LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12);

        IF v_age > 60 THEN
UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE LoanID = rec.LoanID;

DBMS_OUTPUT.PUT_LINE('Discount applied: ' || rec.CustomerID);
END IF;
END LOOP;
END;
/


-- Scenario 2: VIP customers
DECLARE
CURSOR c1 IS
SELECT CustomerID, Balance
FROM Customers;
BEGIN
FOR rec IN c1 LOOP
        IF rec.Balance > 10000 THEN
UPDATE Customers
SET IsVIP = 'TRUE'
WHERE CustomerID = rec.CustomerID;

DBMS_OUTPUT.PUT_LINE(
                'VIP updated for CustomerID: ' || rec.CustomerID
            );
END IF;
END LOOP;
END;
/

SELECT CustomerID, Name, Balance, IsVIP
FROM Customers;



-- Scenario 3: Loan Reminder
DECLARE
CURSOR c1 IS
SELECT c.CustomerID, c.Name, l.EndDate
FROM Customers c
         JOIN Loans l
              ON c.CustomerID = l.CustomerID;

BEGIN
FOR rec IN c1 LOOP

        IF rec.EndDate <= SYSDATE + 30 THEN

            DBMS_OUTPUT.PUT_LINE(
                'Reminder: Loan due within 30 days for customer '
                || rec.Name
            );

END IF;

END LOOP;
END;
/
