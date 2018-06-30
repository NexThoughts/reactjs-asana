import { db } from './firebase';


export const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    });

export const onceGetUsers = () =>
    db.ref('users').once('value');

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

    export const doCreateTask= (id,taskName,createdByUserId,assignedToId) =>
    db.ref(`projects/${id}`).set({
        taskName,
        createdByUserId,
        assignedToId
    });

    export const onceGetProject = () =>
    db.ref('projects').once('value');
  
    export const particularProject = (id) =>
    db.ref(`project/${id}`).once('value')













