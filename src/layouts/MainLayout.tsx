import {Flex } from "@mantine/core";
import Card from "../components/Card";
import { cardDetails } from "../utils/constant/CardDetails";

export default function MainLayout() {
  return (
    <Flex p={20} justify={"space-between"} gap={"sm"} wrap={"wrap"}>
      {cardDetails.map((res,index)=><Card  key={index} CardDetails={res}/>)}
      
    </Flex>
  )
}
