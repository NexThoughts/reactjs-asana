import { db } from './firebase';


export const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    });

export const onceGetUsers = (id) =>
    db.ref(`users/${id}`).once('value');

export const doCreateTodo = (userid, topic, content) =>
    db.ref(`todos/${userid}`).set({
        topic,
        content
    });

    export const doCreateProject= (id,projectName,createdByUserId) =>
    db.ref(`projects/${id}`).set({
        projectName,
        createdByUserId,
    });

    export const doCreateTask= (id,taskName,description,createdByUserId,assignedToId) =>
    db.ref(`tasks/${id}`).set({
        taskName,
        description,
        createdByUserId,
        assignedToId
    });

    export const onceGetProject = () =>
    db.ref(`projects`).once('value');
  
    export const particularProject = (id) =>
    db.ref(`project/${id}`).once('value')













