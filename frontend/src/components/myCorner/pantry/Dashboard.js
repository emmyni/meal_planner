import React, { Fragment } from "react";
import Form from "../../common/items/form";
import Items from "../../common/items/itemList";

export default function Dashboard() {
  return (
    <Fragment>
      <Form isPantry={true} />
      <Items isPantry={true} />
    </Fragment>
  );
}
