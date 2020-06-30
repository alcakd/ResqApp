import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ResponsiveGrid({ data, searchValue }) {
  console.log("Rendering in grid:", searchValue, data);
  let dataToRender;

  if (searchValue) {
    searchValue = searchValue.toLowerCase();
    //Separate search tokens by space, remove whitespaces from tokens
    let searchTokens = searchValue.split(" ").filter((e) => String(e).trim());
    console.log("searchTokens", searchTokens);
    dataToRender = data.filter((ele) => {
      for (let token of searchTokens) {
        console.log("looking at token", token);
        if (
          ele.name.toLowerCase().includes(token) ||
          ele.address.toLowerCase().includes(token) ||
          ele.size.toLowerCase().includes(token)
        ) {
          return true;
        }
      }
      return false;
    });
  } else {
    dataToRender = data;
  }

  //Oh boy this was a waste of time
  //   let rows = [];
  //   const MAX_COLS = 3;
  //[0 1 2] [3 4 5] 6
  //if (index+1 % MAX_COLS === 0)
  //   var col = [];
  //   for (var i = 0; i < data.length; i++) {
  //     var index = i;
  //     var ele = data[index];
  //     console.log("ele, index", ele, index);
  //     col.push(
  //       <Col xs={6} md={4}>
  //         {ele.name} {ele.address} {ele.size}
  //       </Col>
  //     );
  //     console.log("After adding column", col);

  //     if ((index + 1) % MAX_COLS === 0 || index === data.length - 1) {
  //       console.log("Adding col to row", col);
  //       rows.push(<Row>{col}</Row>);
  //       col = [];
  //     }
  //   }
  //console.log("segmentedData", rows);

  return (
    <Container>
      <Row>
        {dataToRender.map(function (ele, index) {
          return (
            <Col xs={6} md={4} className="my-3">
              <div>{ele.name}</div>
              <div>{ele.address}</div>
              <div>{ele.size}</div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ResponsiveGrid;
