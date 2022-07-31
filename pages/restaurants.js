import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { useRouter } from "next/router";

const GET_RESTAURANT_DISHES = gql `
  query ($id : ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  } 
`;

const Restaurants = (props) => {
  const router = useRouter()
  const {loading, error, data} = useQuery(GET_RESTAURANT_DISHES, {
    variables: {id: router.query.id},
  });
  if(error) return "レストランの読み込みに失敗しました。"
  if(loading) return <h1>読み込み中...</h1>
  if (data) {
    const restaurant = data
    return (
      <>
      <section>
        <h1>{restaurant?.restaurant?.name}</h1>
          <Row>
            {restaurant?.restaurant?.dishes?.map((res) => (
              <>
              <Col xs="6" sm="4" key={res.id} style ={{}}>
                <Card style={{margin:"0.05rem 20px 0.5rem"}}>
                  <CardImg 
                    src={`${process.env.NEXT_PUBLIC_API_URL}${res?.image.url}`} 
                    top={true} 
                    style={{height: 250}}
                  />
                  <CardBody>
                    <CardTitle>{res.name}</CardTitle>
                    <CardTitle>{res.description}</CardTitle>
                  </CardBody>  
                  <div className="card-footer">
                   <Button outline color="primary">
                     + カートに入れる
                    </Button>
                  </div>
                </Card>
              </Col>  
              </>
            ))}
          </Row>
      </section>
      <style jsx>
        {`
        section {
          margin: 30px;
        }
        `}
      </style>
      </>
      ) 
  } else return <h1>レストランが見つかりませんでした。</h1>
}
export default Restaurants;