import React, { useState } from "react";
import insta from "../../assets/insta.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import img2 from "../../assets/Your Image 1.svg";
import img3 from "../../assets/Image.svg";
import "./explore.css";
import ReactPlayer from "react-player";
export default function Explore() {
  const [posttype, setPostType] = useState("post");
  return (
    <div>
      <h2>Explore</h2>
      <div className="feeds">
        <div className="explore-content">
          <div className="explore-item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="match-parent"
              playing={true}
            />
            <div className="feed-action">
              <div>
                <div class="display-picture feed"></div>
                <span className="feed-account-name">Riyan</span>
              </div>

              <div className="feed-account-details">
                <div className="feed-item-likes">
                  <FavoriteBorderOutlinedIcon
                    style={{ verticalAlign: "middle" }}
                  />
                  100k
                </div>
                &nbsp;&nbsp;
                <div className="feed-item-comments">
                  <MapsUgcOutlinedIcon style={{ verticalAlign: "middle" }} />
                  200
                </div>
              </div>
            </div>
          </div>
          <div className="explore-item">
            {posttype == "video" && (
              <>
                {" "}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  width="match-parent"
                  playing={true}
                />
              </>
            )}
            {posttype == "post" && (
              <>
                {" "}
                <img src={insta} />
              </>
            )}

            <div className="feed-action">
              <div>
                <div class="display-picture feed"></div>
                <span className="feed-account-name">Riyan</span>
              </div>

              <div className="feed-account-details">
                <div className="feed-item-likes">
                  <FavoriteBorderOutlinedIcon
                    style={{ verticalAlign: "middle" }}
                  />
                  100k
                </div>
                &nbsp;&nbsp;
                <div className="feed-item-comments">
                  <MapsUgcOutlinedIcon style={{ verticalAlign: "middle" }} />
                  200
                </div>
              </div>
            </div>
          </div>
          <div className="explore-item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="match-parent"
              playing={true}
            />
            <div className="feed-action">
              <div>
                <div class="display-picture feed"></div>
                <span className="feed-account-name">Riyan</span>
              </div>

              <div className="feed-account-details">
                <div className="feed-item-likes">
                  <FavoriteBorderOutlinedIcon
                    style={{ verticalAlign: "middle" }}
                  />
                  100k
                </div>
                &nbsp;&nbsp;
                <div className="feed-item-comments">
                  <MapsUgcOutlinedIcon style={{ verticalAlign: "middle" }} />
                  200
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
