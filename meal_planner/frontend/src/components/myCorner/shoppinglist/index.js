import React, { Fragment } from "react";
import Items from "../../common/items/itemList";
import Add from "./add";

export default function shoppingList() {
  return (
    <Fragment>
      <div className="my-4">
        <Add />
        <Items isPantry={false} />
      </div>
    </Fragment>
  );
}
