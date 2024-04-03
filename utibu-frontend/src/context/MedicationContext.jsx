import { createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router"
import  Swal from "sweetalert2"
export const MedicationContext= createContext()

export function MedicationProvider({children}){
  const nav = useNavigate()
  const [medication, setMedication] = useState()
  const [selectedMedication, setSelectedMedication] = useState([]);
  const [checkout, setCheckout] = useState()
  const [onChange,setonChange] = useState()

  const Addtocheckout= (medication) => {
    setSelectedMedication([...selectedMedication, medication]);
    const newcheckout = checkout ? checkout.filter((b) => b.id !== medication.id): [];
    setCheckout([...newcheckout, medication]);
  };

  const removefromcheckout = (medication) => {
    const newSelectedMedication = selectedMedication.filter((f) => f.id !== medication.id);
    setSelectedMedication(newSelectedMedication);

    const newcheckout = checkout.filter((b) => b.id !== medication.id);
    setCheckout(newcheckout);
  };

  useEffect(()=>{
    fetch("/api/medication")
    .then(res => res.json())
    .then(data =>{
      setMedication(data)
    })
  },[])

  // Add Food 
const AddMedication= (medicationName,medicationImage,medicationDesc,quantity,price) =>{
  fetch("/api/medication", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({medicationName,medicationImage,medicationDesc,quantity,price})
  })
  .then((res)=>res.json())
  .then((response)=>{
      console.log(response)
      if(response.error)
      {
          Swal.fire(
              'Error',
              response.error,
              'error'
            )
      }
      else if(response.success)
      { 
          nav("/")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
      }
      else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }

  })
}

// Delete Food
const deleteMedication = (id) =>{
  fetch(`/api/medication/${id}`, {
   method: "DELETE",
          })
  .then((res)=>res.json())
  .then((response)=>{
        if(response.success)
        {
          nav("/")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
        }
        else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }
  })
}
  
    const contextData = {
      medication,
      selectedMedication,
      Addtocheckout,
      removefromcheckout,
      AddMedication,
      deleteMedication,
   
    }
  return (
    <div>
        <MedicationContext.Provider value = {contextData} >
            {children}
        </MedicationContext.Provider>
    </div>
  )
}