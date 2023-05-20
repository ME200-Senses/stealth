import React from "react";
import "./UsersData.css"
const UsersData = ({ users }) => {
  return (
    <>
      {users.map((currUser) => {
        const {
          Name,
          file,
          Owner,
          Type,
          ModifietAt,
          id,
          Label = "d",
        } = currUser;
        return (
          <div className="row">
            <tr className="trow"> 
            <td className="c1">{<input type="checkbox" className="cc1" />}</td>
            <td className="c2">{<img src={file} className="cc2"></img>} {Name.substring(0,10)}</td>
            <td className="c3">
              {<img src={Owner} alt="image" className="cc3"></img>}
            </td>
            <td className="c4">{Label}</td>
            <td className="c5">{Type}</td>
            <td className="c6">{ModifietAt.substring(3,10)}</td>
            <td className="c7">{<div className="edit"></div>}{<div className="bin"></div>}</td>
          </tr>
          <div className="botbor"></div>
          </div>
        );
      })}
    </>
  );
};

export default UsersData;
