import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { UploadOutlined } from "@ant-design/icons";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
import { Button } from "antd";

const App = () => {
  let navigate = useNavigate();
  return (
    <>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="images/icons/logo.png" alt="logo" />
          </Link>
          <Button className="Button" size="large" icon={<UploadOutlined />} onClick={()=>{
			navigate('/upload');
		  }}>
            상품업로드
          </Button>
        </div>
        <div className="gnb-wrap">
          <nav>
            <ul>
              <li>
                <h4><a href="#">맨즈위크</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">OUTER</a></li>
                    <li><a href="#">TOP</a></li>
                    <li><a href="#">BOTTOM</a></li>
                    <li><a href="#">OUTER</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">랭킹</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">전체</a></li>
                    <li><a href="#">남성</a></li>
                    <li><a href="#">여성</a></li>
                    <li><a href="#">아동</a></li>
                    <li><a href="#">아울렛</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">남성</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">상의</a></li>
                    <li><a href="#">하의</a></li>
                    <li><a href="#">정장</a></li>
                    <li><a href="#">셋업</a></li>
                    <li><a href="#">아우터</a></li>
                    <li><a href="#">이너웨어</a></li>
                    <li><a href="#">악세사리</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">여성</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">상의</a></li>
                    <li><a href="#">하의</a></li>
                    <li><a href="#">원피스</a></li>
                    <li><a href="#">아우터</a></li>
                    <li><a href="#">이너웨어</a></li>
                    <li><a href="#">악세사리</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">아동</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">남아</a></li>
                    <li><a href="#">여아</a></li>
                    <li><a href="#">악세사리</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">아울렛</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">남성</a></li>
                    <li><a href="#">여성</a></li>
                    <li><a href="#">아동</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">기획전</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">전체</a></li>
                    <li><a href="#">남성</a></li>
                    <li><a href="#">여성</a></li>
                    <li><a href="#">유니섹스</a></li>
                    <li><a href="#">키즈</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <h4><a href="#">이벤트</a></h4>
                <div className="depth2">
                  <ul>
                    <li><a href="#">진행중</a></li>
                    <li><a href="#">당첨자 발표</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>

      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보...</a>
      </div>
    </>
  );
};
export default App;
