import React, { useContext } from 'react'
import { MedicationContext } from '../context/MedicationContext';

function Medications() {
const {medication, Addtocheckout} = useContext(MedicationContext)

  return (
    <div className='category-container'>
    <div className='card-container'>
      {medication && medication.map((meds) => (
        <div key={meds.id} className='card col-4 mb-3 mr-3 px-3 shadow g-2'>
          <div className='mt-2' style={{ textAlign: 'center' }}>
            <img src={meds.medicationImage} height={250} alt={meds.MedicationName} />
          </div>
          <div className='title' style={{ textAlign: 'center', fontSize: '15pt' }}>{meds.MedicationName}</div>
          <div className='description mx-3'>{meds.MedicationDesc}</div>
          <div className='quantity mx-3'>{meds.quantity}</div>
          <div className='price mx-3'>{meds.price}</div>
          <div className='d-flex flex-column align-items-start'>
            <button className='btn btn-outline-success btn-sm mb-2 d-block mx-auto' onClick={() => Addtocheckout(meds)}>Add to checkout</button>
          </div>
        </div>
      ))}
    </div>
  </div>
    

  )
}

export default Medications