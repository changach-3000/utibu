medications_data = [
  { medicationName: "Amoxicillin", medicationDesc: "Antibiotic used to treat bacterial infections", quantity: 50, price: 15.75, medicationImage: "https://nilsonpharmaceuticals.co.ke/wp-content/uploads/2020/05/amoxtyl.jpg" },
  { medicationName: "Lisinopril", medicationDesc: "ACE inhibitor used to treat high blood pressure", quantity: 30, price: 20.50, medicationImage: "https://www.crescentpharma.com/wp-content/uploads/2017/08/Lisinopril-20mg-Tablets_28s_FF-1.png" },
  { medicationName: "Ibuprofen", medicationDesc: "Nonsteroidal anti-inflammatory drug (NSAID)", quantity: 80, price: 8.50, medicationImage: "https://www.pillsorted.com/wp-content/uploads/2023/06/IBUPROFEN20200mg2024.png" },
  { medicationName: "Aspirin", medicationDesc: "Analgesic and antipyretic medication", quantity: 70, price: 7.99, medicationImage: "https://medicinaonline.ae/cdn/shop/products/Aspirin-Protect-30_s.jpg?v=1612788945" },
  { medicationName: "Simvastatin", medicationDesc: "Statins used to lower cholesterol levels", quantity: 35, price: 22.99, medicationImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_higR1q37ZlEno_uPwECyrXJC2ZnrbsLbcxHNKLSlkA&s" },
  # Add more medication data here...
]

medications_data.each do |medication_params|
  Medication.create(medication_params)
end
