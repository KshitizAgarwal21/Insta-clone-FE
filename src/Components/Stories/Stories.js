import React from "react";
import "./stories.css";
import { useNavigate } from "react-router-dom";
export default function Stories() {
  const navigate = useNavigate();
  const openStory = (storyid) => {
    navigate("/story", { state: { storyid: storyid } });
  };
  const storyarr = [
    {
      user: "Friend1",
      dp: "link1",
      storyid:
        "https://images.pexels.com/photos/11180713/pexels-photo-11180713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      user: "Friend2",
      dp: "link2",
      storyid:
        "https://images.pexels.com/photos/12641771/pexels-photo-12641771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      user: "Friend3",
      dp: "link3",
      storyid: "12035",
    },
    {
      user: "Friend4",
      dp: "link4",
      storyid: "12044",
    },
    {
      user: "Friend5",
      dp: "link5",
      storyid: "12037",
    },
  ];
  return (
    <div>
      <div className="heading">
        <div>
          <h2>Stories</h2>
        </div>
        <div style={{ marginRight: "50px", marginTop: "10px" }}>
          <p>Watch All</p>
        </div>
      </div>
      <div className="stories">
        {storyarr.map((elem) => {
          return (
            <>
              <div
                class="display-picture story"
                onClick={() => {
                  openStory(elem.storyid);
                }}
              ></div>
            </>
          );
        })}

        {/* <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div> */}
      </div>
    </div>
  );
}
