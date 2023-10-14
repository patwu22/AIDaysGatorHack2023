import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";

function CategoriesStack() {
  const [isStackVisible, setIsStackVisible] = useState(true);

  const handleButtonClick = () => {
    console.log("button in stack clicked");
    setIsStackVisible(false);
  };

  if (isStackVisible) {
    return (
      <Stack
        className="m-3 d-flex justify-content-center"
        direction="horizontal"
        gap={2}
      >
        <Categories name="Category1" onClick={handleButtonClick}>
          Category 1
        </Categories>
        <Categories name="Category2" onClick={handleButtonClick}>
          Category 2
        </Categories>
        <Categories name="Category3" onClick={handleButtonClick}>
          Category 3
        </Categories>
      </Stack>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default CategoriesStack;
