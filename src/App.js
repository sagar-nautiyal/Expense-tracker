import { useState, useReducer, useEffect } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebaseInit";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_EXPENSES": {
      return {
        expenses: payload.expenses,
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses],
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = [...state.expenses];
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate,
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  useEffect(() => {
    // Set up real-time listener for expenses
    const unsubscribe = onSnapshot(
      collection(db, "expenses"), 
      (snapshot) => {
        const expenses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: "GET_EXPENSES", payload: { expenses } });
      },
      (error) => {
        console.error("Error fetching expenses: ", error);
        toast.error("Failed to load expenses.");
      }
    );

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  const addExpense = async (expense) => {
    try {
      const expenseRef = collection(db, "expenses");
      await addDoc(expenseRef, expense);
      toast.success("Transaction added successfully.");
    } catch (error) {
      console.error("Error adding expense: ", error);
      toast.error("Failed to add transaction.");
    }
  };

  const deleteExpense = async (id) => {
    try {
      await deleteDoc(doc(db, "expenses", id));
      toast.success("Transaction deleted successfully.");
    } catch (error) {
      console.error("Error deleting expense: ", error);
      toast.error("Failed to delete transaction.");
    }
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    try {
      const expenseRef = doc(db, "expenses", expense.id);
      await setDoc(expenseRef, expense);
      toast.success("Transaction updated successfully.");
      return true;
    } catch (error) {
      console.error("Error updating expense: ", error);
      toast.error("Failed to update transaction.");
      return false;
    }
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
