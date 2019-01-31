import React from 'react';

const Notifications = (props) => {
  const { notifications } = props;
  console.log('notifications', notifications);

//   const notificationList = notifications ? notifications
//     .map(notif => (
//   return <li>{notif.content}</li>;
// ) : null;

  return (
    <div className='section'>
      <div className="card z-depth-1">
        <div className="card-content">
          <span className='card-title'>Notifications</span>
          <ul className='notification'>
            {notifications && notifications.map(n => {
              return (
                <li key={n.id}>{n.user}, {n.content}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

