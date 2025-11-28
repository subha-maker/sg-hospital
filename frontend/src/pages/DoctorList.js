import React from "react";
import "./DoctorList.css";

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    description: "Expert in heart-related diseases and advanced cardiac care.",
    experience: "15 years of experience",
    qualification: "MBBS, MD (Cardiology)",
   
    image:
      "https://th.bing.com/th/id/OIP.6twKZHb1hDV-vbsq-4ctDAHaHa?w=197&h=197&c=7&r=0&o=7",
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Dermatologist",
    description: "Specialist in skin, hair, and nail treatments.",
    experience: "10 years of experience",
    qualification: "MBBS, MD (Dermatology)",
   
    image:
      "https://static.vecteezy.com/system/resources/previews/024/585/400/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
  },
  {
    name: "Dr. Sneha Patel",
    specialty: "Pediatrician",
    description: "Provides expert care for infants and children.",
    experience: "12 years of experience",
    qualification: "MBBS, MD (Pediatrics)",
   
    image:
      "https://static.vecteezy.com/system/resources/previews/024/585/400/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
  },
  {
    name: "Dr. Ramesh Kumar",
    specialty: "Neurologist",
    description: "Treats brain and nervous system disorders.",
    experience: "18 years of experience",
    qualification: "MBBS, DM (Neurology)",

    image:
      "https://th.bing.com/th/id/OIP.6twKZHb1hDV-vbsq-4ctDAHaHa?w=197&h=197&c=7&r=0&o=7",
  },
  {
    name: "Dr. Vivek Sharma",
    specialty: "Orthopedic Surgeon",
    description: "Expert in bone and joint-related surgeries.",
    experience: "20 years of experience",
    qualification: "MBBS, MS (Orthopedics)",
   
    image:
      "https://th.bing.com/th/id/OIP.6twKZHb1hDV-vbsq-4ctDAHaHa?w=197&h=197&c=7&r=0&o=7",
  },
  {
    name: "Dr. Kavya Rao",
    specialty: "Gynecologist",
    description: "Specialist in women's reproductive health.",
    experience: "11 years of experience",
    qualification: "MBBS, MD (Gynecology)",

    image:
      "https://static.vecteezy.com/system/resources/previews/024/585/400/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
  },
  {
    name: "Dr. Neha Gupta",
    specialty: "Psychiatrist",
    description: "Provides mental health consultation and therapy.",
    experience: "14 years of experience",
    qualification: "MBBS, MD (Psychiatry)",
    
    image:
      "https://static.vecteezy.com/system/resources/previews/024/585/400/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
  },
  {
    name: "Dr. Harish Menon",
    specialty: "ENT Specialist",
    description: "Treats ear, nose, and throat-related problems.",
    experience: "9 years of experience",
    qualification: "MBBS, MS (ENT)",
   
    image:
      "https://th.bing.com/th/id/OIP.6twKZHb1hDV-vbsq-4ctDAHaHa?w=197&h=197&c=7&r=0&o=7",
  },
  {
    name: "Dr. Rajesh Iyer",
    specialty: "Ophthalmologist",
    description: "Specialist in vision and eye-related care.",
    experience: "17 years of experience",
    qualification: "MBBS, MS (Ophthalmology)",
  
    image:
      "https://th.bing.com/th/id/OIP.6twKZHb1hDV-vbsq-4ctDAHaHa?w=197&h=197&c=7&r=0&o=7",
  },
  {
    name: "Dr. Deepa Reddy",
    specialty: "Dentist",
    description: "Expert in oral hygiene and dental surgery.",
    experience: "8 years of experience",
    qualification: "BDS, MDS (Oral Surgery)",
  
    image:
      "https://static.vecteezy.com/system/resources/previews/024/585/400/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
  },
];

export default function DoctorList() {
  return (
    <div className="doctor-container"><br></br>
      <h1 className="doctor-title">Meet Our Doctors</h1>
      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} className="doctor-img" />
            <h3>{doc.name}</h3>
            <p className="specialty">{doc.specialty}</p>
            <p>{doc.description}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Qualification:</strong> {doc.qualification}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
