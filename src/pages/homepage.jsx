import './homepage.css';

export default function Homepage() {
  function mainPage() {
    return (
      <div className="blurbs">
        <div className="leftBlurb">
          <div className="guitar">Guitarist</div>
          <div className="game">Gamer</div>
          <div className="fight">Martial Artist</div>
        </div>
        <div className="midBlurb">
          <div className="fEnd">Front End Development</div>
          <div className="name">Derek Broden</div>
          <div className="bEnd">Back End Development</div>
        </div>
        <div className="rightBlurb">
          <div className="outside">Nature Enthusiast</div>
          <div className="animal">Animal Lover</div>
          <div className="childcare">Childcare</div>
        </div>
      </div>
    );
  }

  return mainPage();
}