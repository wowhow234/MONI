import React from "react";
import Link from "next/link";
import SimpleSlider from "./mainbanner";

const Main1 = () => {
  return (
    <div>
      <div className="mainbox1">
        <div>
          {/* <img src="/images/index/main-banner.png" /> */}
          <SimpleSlider />
        </div>
        <div className="mainbox1-1">
          <img src="/images/index/react.png" />
          <img src="/images/index/java.png" />
          <img src="/images/index/kotlin.png" />
          <img src="/images/index/nodejs.png" />
          <img src="/images/index/swift.png" />
          <img src="/images/index/jquery.png" />
          <img src="/images/index/javascript.png" />
          <img src="/images/index/photoshop.png" />
          <img src="/images/index/illustrator.png" />
          <img src="/images/index/figma.png" />
        </div>
      </div>
      <style jsx>{`
        .mainbox1 {
          /* border: 2px solid #4b7b00; */
        }
        /* .mb-img { */
        /* border: 3px solid blue; */
        /* text-align: center; */
        /* } */
        .mainbox1-1 {
          display: flex;
          justify-content: space-around;
          margin: 40px 0 80px 0;
        }
      `}</style>
    </div>
  );
};

export default Main1;
