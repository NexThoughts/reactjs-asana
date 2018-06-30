import Dexie from "dexie";
import uuidV1 from "uuid";

const db = new Dexie("testReactJS");

export const createProjectSchema = () => {
  db.version(1).stores({
    projects: "name,description,followers,uuid,createdBy"
  });
  db.projects.add({
    name: "Josephine",
    description: "21",
    follower: ["abc", "xyz"]
  });
};

export const storeProjectData = (name, description, createdBy, followers) => {
  db.projects.add({
    name: name,
    description: description,
    follower: followers,
    createdBy: createdBy,
    uuid: uuidV1()
  });
};
