import React, { Component } from "react";

import {
    CCard,
    CCardBody,
    CCardFooter,
    CDataTable,
    CCardHeader,
    CCol,
    CRow,
    CBadge
  } from '@coreui/react'

const getBadge = is_active => {
switch (is_active) {
    case 'true': return 'success'
    case 'false': return 'warning'
    default: return 'danger'
}
}
const fields = ['N','Prenom','Nom',,'email', 'role', 'is_active']

const usersData = [
    {
        id:0,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
    {
        id:1,
        N: 1,
        Prenom: "Khadim",
        Nom: "Diakhate",
        email: "dkhadim@ept.sn",
        role: "admin",
        is_active: "true"
    },
]

class Inactifs extends Component {
    render(){
        return(
            <CCard>
            <CCardHeader>
              Les utilisateurs inactifs
            </CCardHeader>
            <CCardBody>
            <CRow>
                <CCol sm="12" lg="12">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>N°</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>email</th>
                        <th>role</th>
                        <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Khadim</td>
                            <td>Diakhate</td>
                            <td>dkhadim@ept.sn</td>
                            <td>ETUDIANT</td>
                            <td><button className="btn btn-success">Activer</button></td>
                        </tr>
                    </tbody>
                </table>
                </CCol>
            </CRow>
            </CCardBody>
            </CCard>
        )
    }
}

export default Inactifs