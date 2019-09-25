// @flow
import React from 'react';

import GoldCoinLP from '../../../templates/gold-coin-lp';
import Social from '../../../components/social';

import type { HubspotFormProps } from '../../../components/hubspot/form';

import {
  serviceMeshData,
  northStarData,
  continuousDeliveryData,
  productStrategyData,
} from '../gold-coins';

type ServiceMeshProps = {
  hubspotForm: HubspotFormProps,
};

const social = {
  title: 'Service Mesh | Red Badger',
  description:
    'We’re an award winning, independently owned consultancy who believe in doing the right thing and doing the thing right.',
  metaImage: serviceMeshData.headerImage,
  altText: 'Our founders Dave, Stu and Cain.',
  url: 'https://red-badger.com/about-us',
};

const previews = [continuousDeliveryData, northStarData, productStrategyData];

const ServiceMeshLP = ({ hubspotForm }: ServiceMeshProps) => {
  return (
    <div>
      <Social {...social} />
      <GoldCoinLP
        {...serviceMeshData}
        hubspotForm={hubspotForm}
        previews={previews}
        pageTitle={social.title}
      />
    </div>
  );
};

export default ServiceMeshLP;
