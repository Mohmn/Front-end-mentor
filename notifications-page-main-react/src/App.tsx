import style from './App.module.css'
import MessageNotification from './Components/MessageNotification';
import globalstyle from './Components/global.module.css'
function App() {

  return (
    <div className={style.container}>
      <div className={style.flex + ' ' + style.flexEnd}>
        <div className={style.flex}>
          <h2 className={globalstyle.activeP}>Notifications</h2>
          <div className={style.smallbox}>
            <h3 className={style.noMargin}>3</h3>
          </div>
        </div>
        <p>Mark all as read</p>
      </div>
      <div className={style.notificationDiv}>
        <MessageNotification
          profileUrl={'src/assets/images/avatar-mark-webber.webp'}
          highlightMessage={' reacted'}
          notificationTime={'1m ago'}
          username={'Mark Webber '}
          generaltext={'reacted to your recent post'}
        />
        <MessageNotification
          profileUrl={'src/assets/images/avatar-angela-gray.webp'}
          notificationTime={'5m ago'}
          username={'Angela Gray'}
          generaltext={'followed you'}
        />
        <MessageNotification
          profileUrl={'src/assets/images/avatar-jacob-thompson.webp'}
          notificationTime={'5 days ago'}
          username={'Jacob Thompson'}
          generaltext={'has joined your group'}
          highlightMessage={'Chess Club'}
        />
        <MessageNotification
          profileUrl={'src/assets/images/avatar-rizky-hasanuddin.webp'}
          notificationTime={'5 days ago'}
          username={'Rizky Hasanuddin'}
          generaltext={'sent you a private message'}
          message={
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestias sequi accusantium minus fugiat ad et aliquam nam hic ut, 
            assumenda at? Cupiditate accusamus perferendis cum eius dolor! Maiores, 
            laborum autem.`
          }
        />
        <MessageNotification
          profileUrl={'src/assets/images/avatar-anna-kim.webp'}
          notificationTime={'5 days ago'}
          username={'Anna kim'}
          generaltext={'reacted to your recent post'}
          highlightMessage={'5 end-game strategies to increace your win rate'}
        />
      </div>
    </div>
  )
}

export default App
