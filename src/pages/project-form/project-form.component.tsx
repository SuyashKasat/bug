import "./project-form.styles.scss";
import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { firestore } from "../../firebase/firebase.utils";
import CurrentUserContext from "../../providers/current-user/current-user.provider";

const ProjectForm = () => {
  const [projName, setProjName] = useState("");
  const [projDescription, setProjDescription] = useState("");
  const [projStatus, setProjStatus] = useState("");

  const currentUser = useContext(CurrentUserContext);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "projName":
        setProjName(value);
        break;

      case "projDescription":
        setProjDescription(value);
        break;
      case "projStatus":
        setProjStatus(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const projId = v4();

    firestore
      .collection("projects")
      .doc(projId)
      .set({
        name: projName,
        description: projDescription,
        status: projStatus,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .then(() => {
        firestore
          .collection("users")
          .doc(`${currentUser.id}/createdProjects/${projId}`)
          .set(
            {
              name: projName,
              description: projDescription,
              status: projStatus,
            },
            { merge: true }
          )
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className={"pt-5 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5"}>
      <h2 className="text-center">CREATE A NEW PROJECT</h2>
      <form className={"mb-5"} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projName">Title</label>
          <input
            type="text"
            name="projName"
            className="form-control"
            id="projName"
            placeholder="Project name here..."
            value={projName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projDescription">Description</label>
          <textarea
            className="form-control"
            name="projDescription"
            id="projDescription"
            placeholder="Write a description for your project here..."
            rows={3}
            value={projDescription}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projStatus">Operational Status</label>
          <select
            className="form-control"
            name="projStatus"
            id="projStatus"
            value={projStatus}
            onChange={handleChange}
          >
            <option>--Select--</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Ended</option>
            <option>Maintenance</option>
          </select>
        </div>
        <button type={"submit"} className={"btn btn-dark"}>
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;