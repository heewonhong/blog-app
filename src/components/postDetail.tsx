import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            titletieltietleteitetiketietletieoltik
          </div>
          <div className="post__profile-box">
            <div className="post__profile"> </div>
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2024.01.10 금요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            Jump out the window if you are the object of passion. Flee it if you
            feel it. Passion goes, boredom remains.ump out the window if you are
            the object of passion. Flee it if you feel it. Passion goes, boredom
            remains.Jump out the window if you are the object of passion. Flee
            it if you feel it. Passion goes, boredom remains.ump out the window
            if you are the object of passion. Flee it if you feel it. Passion
            goes, boredom remains.Jump out
          </div>
        </div>
      </div>
    </>
  );
}
