import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  console.log('notifications', notifications);

  return (
    <div className='section'>
      <div className="card z-depth-1">
        <div className="card-content">
          <span className='card-title'>Notifications</span>
          <ul className='notification'>
            {notifications && notifications.map(n => {
              return (
                <li key={n.id}>
                  <span className="pink-text">{n.user} </span>
                  <span>{n.content}</span>
                  <div className="note-date grey-text">{moment(n.time.toDate()).fromNow()}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

