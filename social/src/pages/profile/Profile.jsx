import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
<<<<<<< HEAD
=======
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
>>>>>>> 460d855
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
<<<<<<< HEAD
                src="assets/post/3.jpeg"
=======
                src={`${PF}post/3.jpeg`}
>>>>>>> 460d855
                alt=""
              />
              <img
                className="profileUserImg"
<<<<<<< HEAD
                src="assets/person/7.jpeg"
=======
                src={`${PF}person/7.jpeg`}
>>>>>>> 460d855
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Omer Sapmaz</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}