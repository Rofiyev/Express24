import React from 'react'
import { MainPraductsDataFunc } from '../../../Data';
import MainStylePage from './MainStyle'

export default function MainPage_Petition() {
  return (
    <>
      <MainStylePage />
      <div id='main' className='container'>
        <h2 className='fw-bold'>Arizalar</h2>
        <p className='text'>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">To'liq ismi</th>
                <th scope="col">Taom nomi</th>
                <th scope="col">Narxi</th>
                <th scope="col">Sonni</th>
                <th scope="col">Umumiy narxi</th>
                <th scope="col">Telefon raqami</th>
                <th scope="col">Izoh</th>
              </tr>
            </thead>
            <tbody>
              {MainPraductsDataFunc().map((item, i) => {
                return <tr key={i}>
                  <th className='num' scope="col">{i + 1}</th>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.product}</td>
                  <td scope="col">{item.price}</td>
                  <td scope="col">{item.howMany}</td>
                  <td scope="col">{item.total}</td>
                  <td scope="col">{item.phone}</td>
                  <td scope="col">{item.comment}</td>
                </tr>
              })}
            </tbody>
          </table>
          <div className='d-flex justify-content-between px-3'>
            <span className='fw-bold'>Jami:</span><span className='fw-bold'>182 000 so'm</span>
          </div>
        </div>
      </div>
    </>
  )
}
