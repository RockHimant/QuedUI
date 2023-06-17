import React, { useMemo, useState } from "react"
import {
  Badge,
  Card,
  CardBody,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  Table,
} from "reactstrap"

import { MaterialReactTable } from "material-react-table"
import { Box, MenuItem, TextField, Typography } from "@mui/material"
import TableContainer from "components/Common/TableContainer"
import "./orderdashboard2.scss";
import LiHorizontalTimeline from "pages/Utility/li-horozontal-timeline"

const data = [
  {
    id: 1,
    schedulingDate: "1-June-23",
    quedReference: "Q100973",
    orderNumber: "65783",
    referenceNumber: "PU: 432289402",
    locationInfo: "Interstate Warehouse, Hamilton, OH",
    lane: "Enid, OK - Hamilton, OH",
    preferredTime: "800",
    acceptedTime: "900",
    schedulingSystem: "OpenDock",
    status: "Completed",
  },
  {
    id: 2,
    schedulingDate: "3-June-23",
    quedReference: "Q100979",
    orderNumber: "64389",
    referenceNumber: "BOL: 886709883",
    locationInfo: "Nash's - Nashville TN",
    lane: "Nashville, TN-Phoenix, AZ",
    preferredTime: "2000",
    acceptedTime: "",
    schedulingSystem: "Retalix",
    status: "Submitted",
  },

  {
    id: 3,
    schedulingDate: "3-June-23",
    quedReference: "Q100987",
    orderNumber: "63456",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Bobs Diner - Wilmington, OH",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "500",
    acceptedTime: "500",
    schedulingSystem: "Email",
    status: "Completed",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
  {
    id: 4,
    schedulingDate: "3-June-23",
    quedReference: "Q100988",
    orderNumber: "63457",
    referenceNumber: "PU: 1234556, BOL:58303228, KK:7098",
    locationInfo: "Walmart - Dallas, TX #372 10053 Main st Dallas, TX 75001",
    lane: "Dallas, TX - Wilmington, OH",
    preferredTime: "1400",
    acceptedTime: "",
    schedulingSystem: "Retail link API Connectivity",
    status: "Submitted",
  },
]

const tablePaperProps = {
  elevation: 0,
}

const clickMe = () => {
  alert("Resubmitting")
}

const getRow = renderedCellValue => {
  // debugger;
  // const refs = [] = renderedCellValue.toString().split(',');
  // const elems = refs.map((i, key)  =>
  //   <p key={key} style={{padding:'0px', margin:'0px'}}>{i}</p>
  // );
  // return <span>
  //      {elems}
  // </span>;
  return renderedCellValue.toString().split(",").join("\n")
}

const getColumns = () => {
  return useMemo(
    () => [
      {
        // Build our expander column
        id: "expander", // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}
          </span>
        ),
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <div {...row.getToggleRowExpandedProps()} className="d-flex justify-content-center align-items-center">
            {row.isExpanded ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}
          </div>
        )
      },
      {
        accessor: "schedulingDate", //access nested data with dot notation
        Header: "Scheduling Date"
      },
      {
        accessor: "quedReference",
        Header: "Qued Reference",
      },
      {
        accessor: "orderNumber", //normal accessor
        Header: "Order #",
        
      },
      {
        accessor: "referenceNumber",
        Header: "Reference Number",
        Cell: ({row}) => (
          <Box>
          {row.original.referenceNumber.split(',').map((i, index)=> <p key={index} style={{marginBottom: '0px'}}>{i}</p>)}
          </Box>
		  
        )
        
      },
      {
        accessor: "locationInfo",
        Header: "Location Info",
        
      },
      {
        accessor: "lane",
        Header: "Lane",
        
      },
      {
        accessor: "preferredTime",
        Header: "Preferred Time",
        
      },
      {
        accessor: "acceptedTime",
        Header: "Accepted Time",
        
      },
      {
        accessor: "schedulingSystem",
        Header: "System",
        
      },
    ],
    []
  )
}

const OrderDashboard2 = () => {
  const rowExpandComponent = row => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "-20px",
          marginBottom: "-20px",
          marginLeft: "-16px",
          marginRight: "-16px",
          border: "1px solid #eff2f7",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="table-responsive"
              style={{ fontSize: "11px", width: "50%" }}
            >
              <Table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>State</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Received</td>
                    <td>6/2/23</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Processed</td>
                    <td>6/2/23</td>
                    <td>1505</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Submitted</td>
                    <td>6/2/23</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Resubmitted</td>
                    <td>6/2/23</td>
                    <td>2000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div style={{ display: "flex" , marginLeft:'10px', width:'50%'}}>
              <Col className="d-none d-lg-block">
                <div className="clearfix mt-4 ml-3">
                  <Dropdown
                    isOpen={settingsMenu}
                    toggle={() => {
                      setSettingsMenu(!settingsMenu)
                    }}
                    className="float-end"
                  >
                    <DropdownToggle tag="button" className="btn btn-primary btn-sm">
                     Actions <i className="bx bx-caret-down"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem href="#">Action</DropdownItem>
                      <DropdownItem href="#">Another action</DropdownItem>
                      <DropdownItem href="#">Something else</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </div>
          </div>
        </Box>
      </Box>
    )
  }

  const columns = getColumns()
  const [settingsMenu, setSettingsMenu] = useState(false)

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
    
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "16px",
            marginRight: "16px",
            padding: "10px",
          }}
        >
          {/* <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}> */}
              {/* <div
                className="table-responsive"
                style={{ fontSize: "11px", width: "500px" }}
              > */}
                <Row className="w-100">
                  <Col>
                  <Table className="table table-striped table-bordered table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>State</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Received</td>
                      <td>6/2/23</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Processed</td>
                      <td>6/2/23</td>
                      <td>1505</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Submitted</td>
                      <td>6/2/23</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Resubmitted</td>
                      <td>6/2/23</td>
                      <td>2000</td>
                    </tr>
                  </tbody>
                </Table>
                  </Col>

                  <Col>
                  <div className="clearfix mt-4 ml-3">
                    <Dropdown
                      isOpen={settingsMenu}
                      toggle={() => {
                        setSettingsMenu(!settingsMenu)
                      }}
                      className="float-end"
                    >
                      <DropdownToggle tag="button" className="btn btn-primary btn-sm">
                        <i className="bx bx-caret-down"></i>Actions
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Another action</DropdownItem>
                        <DropdownItem href="#">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  </Col>
                </Row>
                
              {/* </div>
               */}
            {/* </div> */}
          {/* </Box> */}
        </Box>
    
  )
                    );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col lg="12" className="align-self-center">
                      <div className="text-lg-center mt-4 mt-lg-0">
                        <Row>
                          <Col xs="3">
                            <div>
                              <p className="text-primary text-truncate mb-2">
                                Active Requests
                              </p>
                              <h5 className="mb-0 text-primary">14</h5>
                            </div>
                          </Col>
                          <Col xs="3">
                            <div>
                              <p className="text-warning text-truncate mb-2">
                                To Be Reviewed
                              </p>
                              <h5 className="mb-0 text-warning">3</h5>
                            </div>
                          </Col>
                          <Col xs="3">
                            <div>
                              <p className="text-danger text-truncate mb-2">
                                Pending
                              </p>
                              <h5 className="mb-0 text-danger">11</h5>
                            </div>
                          </Col>
                          <Col xs="3">
                            <div>
                              <p className="text-success text-truncate mb-2">
                                Complete
                              </p>
                              <h5 className="mb-0 text-success">44</h5>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card>
                <CardBody>
            <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    customPageSize={10}
                    className="custom-header-css"
                    useSticky
                    renderRowSubComponent={renderRowSubComponent}
                />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default OrderDashboard2;
