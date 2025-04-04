import { Card as MantineCard, Image, Text } from '@mantine/core'
import { CardModel } from '../utils/model/CardModel';
interface CardProps {
  CardDetails: CardModel;
}
export default function Card({CardDetails}:CardProps) {
  return (
    <MantineCard w={300}
      shadow="sm"
      padding="xl"
      component="a"
      href={CardDetails.image}
      target="_blank"
    >
      <MantineCard.Section>
        <Image
          src={CardDetails.image}
          h={160}
          alt="No way!"
        />
      </MantineCard.Section>
      <Text fw={500} size="lg" mt="md">
     {CardDetails.title}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
      {CardDetails.description}
      </Text>
    </MantineCard>
  )
}
