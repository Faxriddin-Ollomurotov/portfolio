import React, { useState } from "react";
import "../portfolio.css";

const Card = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [like, setLike] = useState(data.totalLike);
  const [isLike, setIsLike] = useState(true);
  const handleLike = () => {
    if (isLike) {
      setLike(parseInt(like) + 1);
      setIsLike(!isLike);
    } else {
      setLike(parseInt(like) - 1);
      setIsLike(!isLike);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={data.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{data.category}</span>
          <label>
            <i
              onClick={handleLike}
              style={{ color: isLike ? "black" : "red" }}
              className="fa-solid fa-heart"
            ></i>
            {like}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{data.title}</h2>
        </div>
        <a href="#popup" className="arrow" onClick={toggleModal}>
          <i class="fa-solid fa-right-long"></i>
        </a>
      </div>
      {/* Popup Modal */}
      {modal && (
        <div className="modal btn-modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content d_flex">
              <div className="modal-img left ">
                <img src={data.image} alt="" />
              </div>

              <div className="modal-text right">
                <span>Featured-Design</span>
                <h1>{data.title}</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus non nesciunt harum nisi nam dicta eveniet esse,
                  culpa, tempora a atque incidunt dolor magnam! Tempora tenetur
                  possimus in enim magnam?
                </p>
                <div className="button f_flex mtop">
                  <button className="btn_shadow">
                    LIKE THIS <i className="far fa-thumbs-up"></i>
                  </button>
                  <button className="btn_shadow">
                    VIEW PROJECT
                    {/* <i className="fas fa-chevron-right"></i> */}
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </div>
                <button
                  className="close-modal btn_shadow"
                  onClick={toggleModal}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
