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
        id:2,
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

class Users extends Component {

    componentDidMount(){
        
    }

    render(){
        return(
            <CCard>
            <CCardHeader>
              Tous les utilisateurs
            </CCardHeader>
            <CCardBody>
            <CRow>
                <CCol sm="12" lg="12">
                <CDataTable
                    items={usersData}
                    fields={fields}
                    itemsPerPage={15}
                    hover
                    pagination
                    scopedSlots = {{
                        'is_active':
                        (item)=>(
                            <td>
                            <CBadge color={getBadge(item.is_active)}>
                                {item.is_active}
                            </CBadge>
                            </td>
                        )

                    }}
                />
                </CCol>
            </CRow>
            </CCardBody>
            </CCard>
        )
    }
}

export default Users