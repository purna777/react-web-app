// import ListGroup from "./components/ListGroup";

import { useState } from "react";

import Button, { Alert } from "./components/buttons";
import { Like } from "./components/Like";
import { NewButton } from "./components/buttons";
import { ExpandableText } from "./components/ExpandableText";
import "bootstrap/dist/css/bootstrap.css";
import { Forms } from "./components/ExpensesList/Forms";
import categories from "./components/catgories";
import { ExpenseList } from "./components/ExpensesList/ExpenseList";
import { ExpenseFilter } from "./components/ExpensesList/ExpenseFilter";
import "./index.css";

function App() {
  // const [alertVisibility, setVisibility] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenseslist, setExpansesList] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "bbb", amount: 10, category: "Groceries" },
    { id: 4, description: "bbb", amount: 10, category: "Groceries" },
    { id: 5, description: "bbb", amount: 10, category: "Groceries" },
    { id: 6, description: "ccc", amount: 10, category: "Bills" },
    { id: 7, description: "ccc", amount: 10, category: "Bills" },
    { id: 8, description: "ccc", amount: 10, category: "Bills" },
    { id: 9, description: "ddd", amount: 10, category: "Utilities" },
    { id: 10, description: "ddd", amount: 10, category: "Utilities" },
    { id: 11, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpense = selectedCategory
    ? expenseslist.filter((e) => e.category === selectedCategory)
    : expenseslist;

  return (
    <>
      <div className="mb-5">
        <Forms onSubmit={expense => setExpansesList([...expenseslist, {...expense, id: expenseslist.length +1 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <div>
        <ExpenseList
          expenses={visibleExpense}
          onDelete={(id) =>
            setExpansesList(expenseslist.filter((e) => e.id !== id))
          }
        ></ExpenseList>
      </div>
    </>
    // <div>
    //   <Forms/>
    // </div>
  );
  // return (
  //   <>
  //     <div>
  //       {alertVisibility && (
  //         <Alert onClickEve={() => setVisibility(false)}>Hello World</Alert>
  //       )}
  //       <Button onClickEve={() => setVisibility(true)}>My Button</Button>
  //     </div>
  //     <div>
  //       <Like onClick={() => console.log("clicked")}></Like>
  //     </div>
  //     <div>
  //       <NewButton
  //         onClickEve={() => console.log("clicked")}
  //         children={""}
  //       ></NewButton>
  //     </div>
  //     <div>
  //       <ExpandableText>
  //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
  //         itaque consectetur at in natus, ipsa rerum, totam quisquam neque
  //         cumque sed veritatis? Debitis repellat dicta natus nisi quia unde,
  //         sint harum! Assumenda impedit aspernatur dignissimos quisquam,
  //         voluptate eius nesciunt et incidunt? Ducimus excepturi corrupti
  //         sapiente voluptate illum nulla accusantium consequatur ea consectetur
  //         at? Magni facere architecto quo voluptatem ad, ipsam magnam officiis
  //         ab obcaecati quos facilis sunt velit praesentium necessitatibus
  //         explicabo porro, pariatur repudiandae. Facilis similique et, mollitia,
  //         earum itaque consectetur perspiciatis voluptas sunt ex incidunt minima
  //         ad molestias eaque accusamus fugiat asperiores libero aliquam
  //         recusandae adipisci sed ut harum?
  //       </ExpandableText>
  //     </div>
  //   </>
  // );
}

export default App;
