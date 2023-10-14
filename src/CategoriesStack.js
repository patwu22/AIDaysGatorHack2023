import { Stack } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";



function CategoriesStack() {

    

    

    return (
          <Stack
            className="m-3 d-flex justify-content-center"
            direction="horizontal"
            gap={2}
          >
            <Categories name="Category1"></Categories>
            <Categories name="Category2"></Categories>
            <Categories name="Category3"></Categories>
            </Stack>
    );
}

export default CategoriesStack;
