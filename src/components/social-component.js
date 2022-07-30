export default function Socials({ clickHandler }){
    return (
        <div className="container">
            <div className="share">
                <h5>Share</h5>
            </div>
            <div className="icons">
                <img src="/images/icon-facebook.svg" alt="" />
                <img src="/images/icon-twitter.svg" alt="" />
                <img src="/images/icon-pinterest.svg" alt="" />
            </div>
            <div className="arrow">
                <img src="/images/icon-share.svg" alt="" onClick={clickHandler}/>
            </div>
        </div>
    )
}   