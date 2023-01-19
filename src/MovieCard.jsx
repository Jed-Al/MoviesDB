import './MovieCard.css'
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'

export default function MovieCard({ image, name, plot }) {
  return (
    <Card className='card' color="dark" outline>
      <img alt={name} src={image} />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{plot}</CardText>
        <Button>View more</Button>
      </CardBody>
    </Card>
  );
}
