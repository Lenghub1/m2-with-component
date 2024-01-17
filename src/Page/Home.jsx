import React from "react";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";
import "@material/react-card/dist/card.css";
import { useState } from "react";
import SideBar from "../component/SideBar";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from "@material/react-card";
import MenuScreenshotTest from "../component/Menu";

const Home = () => {
  const cardData = [
    {
      id: 1,
      header: "Meow1",
      imageUrl: "meow.jpeg",
    },
    {
      id: 2,
      header: "Meow2",
      imageUrl: "meow2.jpeg",
    },
    {
      id: 3,
      header: "Meow3",
      imageUrl: "meow3.jpeg",
    },
    {
      id: 4,
      header: "Meow4",
      imageUrl: "meow4.jpeg",
    },
  ];
  const [showMenu, setShowMenu] = useState(false);

  const handleLikeButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "10px",
        }}
      >
        <h2>Menu</h2>
        <img
          style={{ width: "50px", height: "50px", marginTop: "10px" }}
          src="burger.jpg"
          alt=""
          onClick={handleLikeButtonClick}
        />
      </div>

      {showMenu && <SideBar />}
      {cardData.map((card) => (
        <Card
          key={card.id}
          style={{
            marginBottom: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <CardPrimaryContent>
            <h1 style={{ marginLeft: "10px" }}>{card.header}</h1>
            <CardMedia square imageUrl={card.imageUrl} />
          </CardPrimaryContent>

          <CardActions>
            <CardActionButtons>
              <Button
                className="custom-button"
                style={{
                  background: "#4CAF50",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Like
              </Button>
              <Button
                className="custom-button"
                style={{
                  background: "#2196F3",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Comment
              </Button>
            </CardActionButtons>

            <CardActionIcons>
              <i>Click Me Too!</i>
            </CardActionIcons>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Home;
