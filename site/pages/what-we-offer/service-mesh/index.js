// @flow
import React from 'react';

import GoldCoinLP from '../../../templates/gold-coin-lp';
import Social from '../../../components/social';

import {
  serviceMeshData,
  northStarData,
  continuousDeliveryData,
  productStrategyData,
} from '../gold-coins';

const social = {
  title: 'About Us | Red Badger',
  description:
    'We’re an award winning, independently owned consultancy who believe in doing the right thing and doing the thing right.',
  metaImage: serviceMeshData.headerImage,
  altText: 'Our founders Dave, Stu and Cain.',
  url: 'https://red-badger.com/about-us',
};

const previews = [continuousDeliveryData, northStarData, productStrategyData];

const ServiceMeshLP = () => {
  return (
    <div>
      <Social {...social} />
      <GoldCoinLP {...serviceMeshData} previews={previews} />
    </div>
  );
};

export default ServiceMeshLP;
