import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  let profitAmount = 0;
  let lossAmount = 0;
  const grandTotal = expenses.reduce((acc, currentExpense) => {
    const currentExpenseAmount = parseFloat(currentExpense.amount);
    if (currentExpenseAmount < 0) {
      lossAmount += Math.abs(currentExpenseAmount);
    } else {
      profitAmount += currentExpenseAmount;
    }
    return currentExpenseAmount + acc;
  }, 0);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal.toFixed(2)}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profitAmount.toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${lossAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
