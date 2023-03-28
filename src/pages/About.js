import React from "react";
import "./About.css";
  export default function About() {
    return (
      <div className="about">
        <h1>About</h1>
        <h2>Abstract</h2>
        <p>
          The aim of the project is to develop a system for monitoring energy usage in smart buildings. It acts as a bridge
          between the smart grid and smart buildings. A web-based platform is used to track power consumption on the grid as
          well as monitor sensor data. AI technology provides tips for energy conservation based on factors such as power
          usage patterns and weather conditions. Data is transmitted between the client devices (based on Arduino in smart
          homes) and the central server (run on Raspberry Pi and Arduino) via a Zigbee network organized in a star
          formation, allowing for mutual communication. Implementation will result in improving upon the overall energy
          efficiency of supported infrastructure while reassuring continuous and optimized operation in case of a bulk grid
          blackout.
        </p>
        <h2>Problem Statement</h2>
        <p>
          The problem we are attempting to solve is regarding energy efficiency optimization in infrastructures utilizing
          smart home devices built within a smart grid. The proposed solution is a smart energy monitoring system for
          infrastructures utilizing smart home devices. It functions as an intermediary application, connecting with both
          the smart grid and smart systems for comprehensive energy management. The primary goal of the system is to
          monitor power flow into and out of the grid in real-time, accessible through a user-friendly web interface. This
          includes the real-time power consumption data from each main loop as well as the power generated from renewable
          energy sources. One of the system's key aspects is the utilization of AI to offer energy-saving recommendations
          based on current usage patterns. The integration of AI within the system will allow for automated energy-saving
          protocols, turning off any unused smart devices or devices deemed unnecessary based on a comprehensive analysis
          of typical power consumption patterns.
        </p>
        <h2>Background Information</h2>
        <p>
          The current energy infrastructure is faced with various challenges, including cyber threats and natural disasters
          that pose a risk to the power grid. Smart grids provide a solution to these challenges by offering both conjoined
          and island modes of operation. Energy storage technology such as photovoltaic arrays and wind turbines, although
          crucial to the functioning of smart grids, have limited windows of operation.To address these limitations, this 
          project proposes a smart energy monitoring system for smart buildings. The system is designed to monitor and level 
          current distribution to supporting infrastructure, allowing for self-healing grid capabilities. The data acquired 
          through this system will be used to optimize energy usage with AI-powered smart devices. The system utilizes Zigbee 
          technology to create a secure personal area network in a star topology, facilitating two-way communication between 
          the client devices (Arduino-powered smart homes) and the central server (Raspberry Pi). Access to the system is 
          restricted to authorized users through authentication and access control measures. The transmitted data is also 
          protected through encryption, ensuring the security of both transmitted and stored data. The AI component of the 
          system will optimize energy usage by learning energy consumption patterns, predicting future energy consumption 
          using historical data and weather forecasts, and determining when to use saved renewable energy versus energy from 
          the grid. Overall, this project aims to revolutionize the way energy is monitored and managed in smart buildings, 
          providing a comprehensive solution for energy management.
        </p>
        <h2>Technical Content - Hardware</h2>
        <p>
          The hardware will be connected as follows: The hardware configuration is visualized above in a simple schematic.
          Each smart building would have an Arduino with various sensors, namely the current/voltage, light, and
          temperature sensors. This allows for the acquisition of the sensor data that will be displayed and processed by
          the AI to suggest an energy efficiency optimization. Each Arduino(slave) will be communicating with a central
          Raspberry Pi(master) via Zigbee protocol. Then the Raspberry Pi will utilize WiFi protocol to communicate with
          our web application. In this schematic, a black box is put in place of the hardware that will be used to model a
          grid-connected infrastructure with smart devices or a “smart building”.
        </p>
        <h2>Conclusion</h2>
        <p>
          In conclusion, the smart energy monitoring system aims to improve energy efficiency in smart buildings by
          integrating with the smart grid and smart buildings. The system offers real-time power monitoring through a
          web-based interface and AI-generated recommendations for energy savings. A Zigbee network configured in a star 
          topology ensures communication between the clients and server. This system is poised to bring about a major 
          change in energy management in smart buildings, due to its comprehensive and effective solution for smart energy 
          monitoring.
          </p>          
    </div>
  );
}