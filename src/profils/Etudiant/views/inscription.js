import React, { Component } from "react";

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'

class Inscription extends Component {
    render(){
        return(
            <CCard>
            <CCardBody>
            <CRow>
                <CCol sm="12">
                    <h1>Inscription OK</h1>
                </CCol>
            </CRow>
            </CCardBody>
            </CCard>
        )
    }
}

export default Inscription