import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
    <img src= 'https://www.ionos.at/digitalguide/fileadmin/DigitalGuide/Screenshots_2023/logo-best-practice.png'/>
    </div>
    <div>avatar + description</div>
    <div>My posts
      <div className={s.posts}>New post</div>
      <div>
        <div className={s.item}>post1</div>
        <div className='item'>post2</div>
      </div>
    </div>
  </div>
}

export default Profile;