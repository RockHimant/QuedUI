import PropTypes from "prop-types";
import React from "react";
import { Col, Card, CardBody } from "reactstrap";

const MiniWidget4 = ({ reports }) => {
  return (
    <React.Fragment>
      {reports.map((report, key) => (
        <Col sm="3" key={key}>
          <Card>
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-xs me-3">
                  <span className={"avatar-title rounded-circle  bg-soft  font-size-18 bg-" + report.color + " text-" + report.color}>
                    <i className={report.icon} />
                  </span>
                </div>
                <h5 className={"font-size-14 mb-0 text-" + report.color }>{report.title}</h5>
              </div>
              <div className={"mt-4 d-flex justify-content-center text-"+ report.color } >
                <h4 className={"text-"+report.color}>
                  {report.value}
                  
                </h4>
                <div className="d-flex">
                  <span
                    className={
                      "badge badge-soft-" + report.color + " font-size-12"
                    }
                  >
                   
                    {/* {report.badgeValue}{" "} */}
                  </span>{" "}
                  <span className="ms-2 text-truncate">{report.desc}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  )
}

MiniWidget4.propTypes = {
  reports: PropTypes.array,
}

export default MiniWidget4;
