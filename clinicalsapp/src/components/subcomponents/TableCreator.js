import React from "react";

class TableCreator extends React.Component {
  render() {
    let eachEntry = this.props.item;
    let patientId = this.props.patientId;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <b>{eachEntry.componentName}</b>
              </td>
            </tr>
            <tr>
              <td>{eachEntry.componentName}</td>
              <td>{eachEntry.componentValue}</td>
              <td>{eachEntry.measuredDateTime}</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default TableCreator;
