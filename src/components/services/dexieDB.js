import Dexie from "dexie";
import uuidV1 from "uuid";
import { firebase } from "../firebase";

const db = new Dexie("testReactJS");

export const storeProjectData = (name, description, followers) => {
  db.version(1).stores({
    projects: "name,description,followers,uuid,createdBy"
  });
  db.projects.add({
    name: name,
    description: description,
    follower: followers,
    createdBy: firebase.auth.currentUser.uid,
    uuid: uuidV1()
  });
};

export const findProjectByUser = userId => {
  db.version(1).stores({
    projects: "name,description,followers,uuid,createdBy"
  });
  var projectData = [];
  db.projects
    .where("createdBy")
    .equalsIgnoreCase(userId)
    .each(function(project) {
      projectData.push(project);
    });
  return projectData;
};
