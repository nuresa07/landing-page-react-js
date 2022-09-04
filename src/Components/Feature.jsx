import React from "react";
import FeatureBox from "./FeatureBox";
import featureImg from '../images/feature_1.png'
import featureImg1 from '../images/feature_2.png'
import featureImg2 from '../images/feature_3.png'

export default function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureImg} title='Development Course' />
        <FeatureBox image={featureImg1} title='Money Saving Service' />
        <FeatureBox image={featureImg2} title='Usability intervace' />
      </div>
    </div>
  )
}