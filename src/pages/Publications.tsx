const publications = [
  {
    title: "Microcontroller Implementation of Support Vector Machine for Detecting Blood Glucose Levels Using Breath Volatile Organic Compounds",
    publication: "MDPI Sensors, 2019",
    pdf: "/docs/MDPI-sensors-2019.pdf",
    abstract: "This paper presents an embedded system-based solution for sensor arrays to estimate blood glucose levels from volatile organic compounds (VOCs) in a patient's breath. Support vector machine (SVM) was trained on a general-purpose computer using an existing SVM library. A training model, optimized to achieve the most accurate results, was implemented in a microcontroller with an ATMega microprocessor."
  },
  {
    title: "EMI Diagnostics of Three Phase Inverters Using Machine Learning Algorithms",
    publication: "IEEE Energy Conversion Congress and Exposition, 2018",
    pdf: "/docs/IEEE-ECCE-2018.pdf",
    abstract: "Electromagnetic interference (EMI) is often regarded as a disturbance in electrical systems, and most research focuses on developing techniques to mitigate its impact. EMI is particularly problematic in many sensing applications, but there are circumstances when EMI can be used as the sensing tool. This paper describes a method to determine the health of the DC link capacitance in a three-phase inverter using EMI diagnostics."
  },
  {
    title: "Smart wristband with integrated chemical sensors for detecting glucose levels using breath volatile organic compounds",
    publication: "SPIE Smart Biological and Physiological Sensing Technology, 2019",
    pdf: "/docs/SPIE.pdf",
    abstract: "This paper presents a microcontroller-based solution to classify blood glucose levels using acetone and ethanol breath volatile organic compounds. Two metal oxide semiconductor-based chemical sensors able to detect acetone and ethanol at parts per million concentrations were used. The sensors were tested in a controlled setup with humidified air spiked with acetone and ethanol, mimicking human breath corresponding to low and high blood glucose groups."
  },
  {
    title: "MOSFET Junction Temperature Measurements using Conducted Electromagnetic Emissions and Support Vector Machines",
    publication: "IEEE Energy Conversion Congress and Exposition, 2019",
    pdf: "/docs/IEEE-ECCE-2019.pdf",
    abstract: "As power electronics permeate critical infrastructure in modern society, more precise and effective diagnostic methods are required to improve system reliability as well as reduce maintenance costs and unexpected failures. Prognostic and Health Management (PHM) systems that analyze changes in the electromagnetic spectrum (E-PHM) of a circuit can be implemented to determine the health of the equipment under test."
  },
  {
    title: "Non-invasive diagnostic systems and methods",
    publication: "US Patent 12216147B2, 2023",
    pdf: "/docs/US12216147.pdf",
    abstract: "A method of measuring electromagnetic interference (EMI) to noninvasively identify component degradation or failure in power electronics circuitry. The method involves characterizing the degradation or failure characteristics of the component and modeling those characteristics to enable a machine learning algorithm to identify EMI frequency distribution characteristics that correspond to the degradation or failure."
  }
];

export default function Publications() {
  return (
    <div className="page">
      <h1>Publications</h1>
      <div className="publications-grid">
        {publications.map((pub, index) => (
          <a key={index} href={pub.pdf} className="publication-card">
            <h2>{pub.title}</h2>
            <h3>{pub.publication}</h3>
            <p>{pub.abstract}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
