import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return <div className='content'>
    <div>
      <img className={s.content_img} src='https://phonoteka.org/uploads/posts/2021-04/1619064028_17-phonoteka_org-p-dlinnie-kartinki-dlya-fona-18.jpg'/>
    </div>
    <div>
      <img className={s.content_avatar} src='https://mykaleidoscope.ru/uploads/posts/2020-03/1584622396_28-p-krasivie-zagorodnie-doma-92.jpg'/>
      
    </div>
  
    <div className={s.posts}>
      My posts
        <div className={s.item}>New post</div>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
        <div className={s.item}>Post3</div>
    </div>
  </div>
}

export default Profile;