import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Col, Row } from "reactstrap";
import Cart from "../components/Cart";
import CheackoutForm from "../components/Cheackout/CheackoutForm";

const checkout = () => {
  const stripePromis = loadStripe(
    "pk_test_51LTGC5IhCcFUTf63wVrsW6as9BJVx3XuunC1B4Ts4bexJeU8ihCxZeYgRKpBnDdlIYaTqN0PK9OWKkGxGjW2j06F00wZJDXfHJ"
  )
  return (
    <Row>
      <Col style={{ paddingRight: 0}} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{margin: 20, fontSize: 20, textAlign: "center"}}>チェックアウト</h1>
        <Cart />
      </Col>
      <Col style={{paddingLeft: 5}} sm={{size: 6, order: 2}}>
        <Elements stripe={stripePromis}>
          <CheackoutForm />
        </Elements>
      </Col>
    </Row>
  );
}

export default checkout;