import React from 'react'
import UserManagement from '../features/user-management/user-management'
import Manager from '../features/user-management/components/role_rights_manager/Manager'
import Compose_email from '../features/Invoices/components/Compose_email/Compose_email'

const UserManagements = () => {
  return (
    <div>
        <UserManagement/>
        {/* <Manager/> */}
        {/* <Compose_email/> */}
    </div>
  )
}

export default UserManagements