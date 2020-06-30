import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ResponsiveGrid({ data }) {
  console.log("Rendering in grid:", data);

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
        {data.map(function (ele, index) {
          return (
            <Col xs={6} md={4}>
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
