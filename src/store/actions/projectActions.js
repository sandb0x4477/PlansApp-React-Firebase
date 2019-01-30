export const createProject = project => {
  return (dispach, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Steve',
        authorLastName: 'Jobs',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispach({
          type: 'CREATE_PROJECT',
          project
        });
      })
      .catch(err => {
        console.log(err);
        dispach({ type: 'CREATE_PROJECT_ERROR', err})
      });
  };
};
