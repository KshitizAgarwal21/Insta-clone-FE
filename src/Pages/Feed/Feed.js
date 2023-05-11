import React from "react";
import "./feed.css";
import insta from "../../assets/insta.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import img2 from "../../assets/Your Image 1.svg";
import img3 from "../../assets/Image.svg";
export default function Feed() {
  return (
    <div>
      <h2>Feed</h2>

      <div className="feeds">
        <div className="feed-content">
          <div className="feed-item">
            <img src={insta} />
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
          <div className="feed-item">
            <img src={img3} />
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
          <div className="feed-item">
            <img src={img2} />
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
