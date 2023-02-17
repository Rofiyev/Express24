import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import StyledButtons from '../../ButtonStyled/ButtonStyled'
import AddNewPageWrapper from './AddNewPageStyle'

export default function AddNew() {
  return (
    <AddNewPageWrapper>
      <div className='container'>
        <h2 className='fw-bold'>Qo'shish</h2>
        <p className='text'>Yangi kategoriya/taom qo`shish</p>

        <div>
          <Link to="kategoriya" >
            <StyledButtons className="me-2 fw-bold shadow-sm">Kategoriya</StyledButtons>
          </Link>
          <Link to="food" >
            <StyledButtons className="fw-bold" type={'bgTransparent'}>Taom</StyledButtons>
          </Link>

          <div className='mt-3'>
            <Outlet />
          </div>

        </div>
      </div>
    </AddNewPageWrapper>
  )
}
