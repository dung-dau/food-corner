import React from 'react'
import { useState } from 'react'
import Footer from '../../components/common/footer/Footer'
import Header from '../../components/common/header/Header'
import TabOptions from '../../components/common/tabOptions/TabOptions'
import Delivery from '../../components/delivery/Delivery'
import DiningOut from '../../components/diningout/DiningOut'
import NightLife from '../../components/nightlife/NightLife'

function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {/* unique screen */}
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch(tab) {
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Nightlife":
      return <NightLife/>
    default:
      return <Delivery/>
  }
}

export default HomePage