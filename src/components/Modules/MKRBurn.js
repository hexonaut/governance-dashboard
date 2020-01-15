import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Text
} from '@makerdao/ui-components-core';

export default () => {
  const [mkrStaked, setMkrStaked] = useState('0.00');
  return (
    <Grid gridRowGap="m" my={'s'}>
      <Text.h4 textAlign="left" fontWeight="700">
        Total MKR Burned
      </Text.h4>
      <Card>
        <CardBody p={'s'} pb={'m'}>
          <Flex flexDirection="row" m={'s'}>
            {/* Load Number */}
            <Text.h3>
              {`${mkrStaked} MKR `}
              {` `}
            </Text.h3>
            <Text.p color="#708390" ml="xs" fontWeight="400">
              {' '}
              of 50,000 MKR
            </Text.p>
          </Flex>
          <Box
            flexGrow="1"
            bg="#F6F8F9"
            border="default"
            height="20"
            mx="s"
            my="s"
            mb="m"
            style={{ borderRadius: 5, minHeight: 20 }}
          ></Box>
        </CardBody>
        <CardBody>
          <Flex flexDirection="row" justifyContent="space-between" m={'m'}>
            <Button variant="danger-outline">Burn your MKR</Button>
            <Text.p color="#9FAFB9" fontWeight="300" alignSelf="center">
              You have no MKR in the ESM
            </Text.p>
          </Flex>
        </CardBody>
      </Card>
    </Grid>
  );
};