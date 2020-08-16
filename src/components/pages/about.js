import React from "react";
import profilePicture from "../../../static/assets/images/bio/warren-wong-4l-e7U6c5ek-unsplash.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${profilePicture})`,
        }}
      />

      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis,
        magna vitae fermentum maximus, orci tellus aliquet lorem, nec gravida
        nisi ipsum non mi. Integer fringilla arcu magna, in mattis lectus
        porttitor non. Morbi vel sodales sem. Sed interdum elit lorem, id
        vulputate ex egestas non. Mauris vel ultricies urna, non pharetra ante.
        Sed ultricies consectetur magna sit amet aliquet. Sed at libero magna.
        Nunc lacinia, dolor eget sollicitudin placerat, lacus nisl vulputate
        lectus, ac condimentum nibh felis at sem. Fusce a est nisl. Quisque
        pellentesque, turpis a lacinia scelerisque, sem dolor pulvinar diam, id
        consequat nibh ante eget orci. Nam blandit nibh eget purus hendrerit, id
        suscipit tortor pretium.
      </div>
    </div>
  );
}
