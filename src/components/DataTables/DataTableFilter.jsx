import React from "react";
import SelectWithoutLabel from "../Select/SelectWithoutLabel";

const DataTableFilter = () => {
  return (
    <>
      <div className="row cardFilters mt-3">
        <div className="col-md-3">
          <h4>SHOW BY</h4>
          <SelectWithoutLabel size='small'/>
        </div>
        <div className="col-md-3">
          <h4>CATEGORY BY</h4>
          <SelectWithoutLabel size='small'/>
        </div>
      </div>
    </>
  );
};

export default DataTableFilter;
