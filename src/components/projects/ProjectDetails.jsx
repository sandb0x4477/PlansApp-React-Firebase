import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  console.log('id:', id)
  return (
    <div className='container section project-details'>
      <div className='card z-depth-1'>
        <div className='card-content'>
          <span className='card-title'>Title - {id}</span>
          <p>text asdasdkasjd asdjk j lj kkkkkkkkkkkkk </p>
        </div>
          <div className="card-action grey lighten-4 text-grey">
            <div>Posted By</div>
            <div>Date</div>
          </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
