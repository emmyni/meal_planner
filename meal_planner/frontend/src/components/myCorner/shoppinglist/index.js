import React, { Fragment } from "react";
import Form from "../../common/items/form";
import Items from "../../common/items/list";

export default function shoppingList() {
  return (
    <Fragment>
      <div className="my-4">
        <Form isPantry={false} />
        <Items isPantry={false} />
      </div>
    </Fragment>
  );
}
