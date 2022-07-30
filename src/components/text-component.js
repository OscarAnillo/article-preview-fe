

export default function TextComponent({ clickHandler }) {

  return (
    <div className="text-div-one">
      <div>
        <h4>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h4>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some tips to help you make
          any room feel complete.
        </p>
        <div className="row">
          <div className="one">
            <img src="/images/avatar-michelle.jpg" alt="" className="avatar" />
          </div>

          <div className="two">
            <h5>Michelle Appleton</h5>
            <p>28 Jun 2022</p>
          </div>
          <div className="three">
            <img src="/images/icon-share.svg" alt="" className="arrow" onClick={clickHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
}
