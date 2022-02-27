import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Acount</span>
          <span className="settingsDeleteTitle">Delete your Acount</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
             src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg" width="1000px"
             alt="" />
             <label htmlFor="fileInput">
             <i className="settingsPPIcon fa-solid fa-circle-user"></i>
             </label>
             <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Donika" />
          <label>Email</label>
          <input type="email" placeholder="donika.sfishta95@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
