export const signIn = creds => {
  return (dispach, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispach({ type: 'LOGIN_SUCCES' });
      })
      .catch(err => {
        dispach({ type: 'LOGIN_ERROR', err });
      });
  };
};
