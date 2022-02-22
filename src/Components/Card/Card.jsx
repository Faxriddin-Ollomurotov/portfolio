import React, { useState } from "react";

const Card = ({ data }) => {
  const [modal, setModal] = useState(false);

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
            <i className="far fa-heart"></i>
            {data.totalLike}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{data.title}</h2>
        </div>
        <a href="popup" className="arrow" onClick={toggleModal}>
          <i className="fas fa-arrow-right"></i>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      {/* Popup Modal */}
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content d_flex">
              <div className="modal-img left something">
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
                    VIEW PROJECT <i className="fas fa-chevron-right"></i>
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
