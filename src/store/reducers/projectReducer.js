const initState = {
  projects: [
    { id: '1', title: 'help me1', content: 'content1' },
    { id: '2', title: 'help me2', content: 'content2' },
    { id: '3', title: 'help me3', content: 'content3' },
    { id: '4', title: 'help me4', content: 'content4' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project ', action.project);
      return state;

    case 'CREATE_PROJECT_ERROR':
      return state;

    default:
      return state;
  }
};

export default projectReducer;
