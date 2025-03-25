import React from "react";
import Card from "react-bootstrap/Card";
import { TbFileSpreadsheet } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";

function FirstDiv() {
  return (
    <div className="FDiv">
      <div className="firstDIv">
        <Card className="cardBody">
          <Card.Body>
            <Card.Title><FiMenu color="rgb(53, 147, 248)" size={43} /></Card.Title>
            <Card.Subtitle className="mb-2 CardSubTxt">
              Can’t easily produce an accurate master lease list?
            </Card.Subtitle>
            <Card.Text className="cardTxt">
              As your portfolio begins to grow, it can become difficult to maintain an accurate and detailed list of each and every location.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="firstDIv">
        <Card className="cardBody">
          <Card.Body>
            <Card.Title><TbFileSpreadsheet color="rgb(53, 147, 248)" size={43} /></Card.Title>
            <Card.Subtitle className="mb-2 CardSubTxt">        
              Spreadsheets becoming a hassle to maintain?
            </Card.Subtitle>
            <Card.Text className="cardTxt">
              Spreadsheets are great for viewing data, not managing data. It’s easy to make mistakes and hard to keep things organized.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="firstDIv">
        <Card className="cardBody">
          <Card.Body>
            <Card.Title><HiOutlineClipboardDocumentList color="rgb(53, 147, 248)" size={43} /></Card.Title>
            <Card.Subtitle className="mb-2 CardSubTxt">
              Tired of sifting through documents to find key information?
            </Card.Subtitle>
            <Card.Text className="cardTxt">
              Going page by page through a lease document when you need a quick answer is frustrating and time consuming. 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FirstDiv;