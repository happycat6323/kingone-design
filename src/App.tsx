import { useState } from "react";

import image1 from "./image1.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";

import "./styles.less";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("PRODUCT");
  const [activeButton, setActiveButton] = useState<string>("Photo");

  return (
    <div className="root">
      <div className="header">
        {["PRODUCT", "VIDEO", "CATALOG", "EXPLDRE MORE"].map((text) => (
          <div key={text} className={activeTab === text ? "active" : ""}>
            {text}
          </div>
        ))}
      </div>

      <div className="content">
        <div className="image">
          <img src={image1} alt="image1" />

          <div className="button">
            {[
              { text: "Photo", image: icon1 },
              { text: "360", image: icon2 },
              { text: "3D", image: icon3 }
            ].map(({ text, image }) => (
              <div
                key={text}
                className={activeButton === text ? "activeButton" : ""}
              >
                <img src={image} alt="icon" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="description">
          <div>產品型號12345678</div>
          <div>產品名稱 TMA-2 STUDIO</div>
          <div>
            產品介紹 Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.產品介紹 Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over
            2000 years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.
          </div>
        </div>
      </div>
    </div>
  );
}
