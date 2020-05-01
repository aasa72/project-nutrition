import React from 'react'
import styled from 'styled-components'

const FoodSection = styled.section `
  background-color: #F2F2F2;
  margin-bottom: 20px;
  padding: 30px;
  font-family: 'Manrope', sans-serif; 
  list-style-image: 🍀;
`

export const LocalFoodText = () => {
  return (
    <FoodSection>
    <ul>
      <li>Locally grown food is full of flavor. When grown locally, the crops are picked at their peak of ripeness versus being harvested early in order to be shipped and distributed to your local retail store. Many times produce at local markets has been picked within 24 hours of your purchase.</li>
      <li>Eating local food is eating seasonally. Even though we wish strawberries were grown year round in Michigan, the best time to eat them is when they can be purchased directly from a local grower. They are full of flavor and taste better than the ones available in the winter that have traveled thousands of miles and picked before they were ripe.</li>
      <li>Local food has more nutrients. Local food has a shorter time between harvest and your table, and it is less likely that the nutrient value has decreased. Food imported from far-away states and countries is often older, has traveled and sits in distribution centers before it gets to your store.</li>
      <li>Local food supports the local economy. The money that is spent with local farmers and growers all stays close to home and is reinvested with businesses and services in your community.</li>
      <li>Local food benefits the environment. By purchasing locally grown foods you help maintain farmland and green and/or open space in your community.</li>
      <li>Local foods promote a safer food supply. The more steps there are between you and your food’s source the more chances there are for contamination. Food grown in distant locations has the potential for food safety issues at harvesting, washing, shipping and distribution.</li>
      <li>Local growers can tell you how the food was grown. You can ask what practices they use to raise and harvest the crops. When you know where your food comes from and who grew it, you know a lot more about that food.</li>
    </ul>
    </FoodSection>
  )
}
/*Locally grown food is full of flavor. When grown locally, the crops are picked at their peak of ripeness versus being harvested early in order to be shipped and distributed.
Eating local food means eating seasonally. Even though we wish strawberries were grown year round, the best time to eat them is when they can be purchased directly from a local grower. They are full of flavor and taste better than the ones available in the winter that have traveled thousands of miles and picked before they were ripe.
Local food has a shorter time between harvest and your table, so it is less likely that the nutrient value has decreased. 
Local food also supports the local economy, the money stays close to home and is reinvested with businesses and services in your community.
Local food benefits the environment. By purchasing locally grown foods you help maintain farmland and green and/or open space in your community.
Local foods promote a safer food supply. The more steps there are between you and your food’s source the more chances there are for contamination. Food grown in distant locations has the potential for food safety issues at harvesting, washing, shipping and distribution.
Local growers can tell you how the food was grown. You can ask what practices they use to raise and harvest the crops. When you know where your food comes from and who grew it, you know a lot more about that food.
*/
