import React from "react";
import DownloadIMG from "../../assits/resumi/resumeImg.jpg";
import DownloadFile from "../../assits/resumi/resumeFile.pdf";
import DownloadVideo from "../../assits/resumi/resumeVideo.mp4";
import img1 from "../../assits/resumi/img1.png";
import img2 from "../../assits/resumi/img2.png";
import img3 from "../../assits/resumi/img3.png";
import "./resume.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Resume file download",
    id: 1,
    imgURL: img2,
    resumeFile: DownloadFile,
  },
  {
    name: "Resume image download",
    id: 2,
    imgURL: img1,
    resumeFile: DownloadIMG,
  },
  {
    name: "Resume video download",
    id: 3,
    imgURL: img3,
    resumeFile: DownloadVideo,
  },
];

const Resume = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <>
      <div className="resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h1>My Resume</h1>
          </div>
          <div>
            <Slider {...settings}>
              {photos.map((photo) => {
                return (
                  <div className="content">
                    <div className="display-flex">
                      <div className="rasm">
                        <img src={photo.imgURL} alt={photo.id} />
                      </div>
                      <div className="text-content text-center">
                        <h1>{photo.name}</h1>
                        <a href={photo.resumeFile} download>
                          <button className="btn-download">
                            <i class="fa-solid fa-file-arrow-down size fa-lg"></i>
                            <p>Download</p>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
