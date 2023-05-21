import {Col, Row} from "reactstrap";

import Import from "./ui/Import";
import Excel from "../Components/dashboard/Excel";



const Starter = () => {
   /* useEffect(() => {
        console.log(getUserFromLocalCache())
    }, []);*/
    return (
        <div>
            {/***Top Cards***/}

      {/***Sales & Feed***/}
      
        {/*<Feeds />*/}
        <Import />
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <Excel />
          {/*<ProjectTables />*/}
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/*<Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
        </Row>*/}
    </div>
  );
};

export default Starter;
