import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

const query = gql `
  {
    restaurants {
      id 
      name 
      description
      image{
        url
      }
    }
  }`

const RestaurantsList = () => {
  const {loading, error, data} = useQuery(query);

  console.log(data?.image);
  if (data?.restaurants && data?.restaurants.length) {
    return (
      <Row>
        {data?.restaurants.map((res) => (
          <>
          <Col xs="6" sm="4" >
            <Card style={{margin:"0.05rem 20px 0.5rem"}}>
              <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${res?.image[0]}`} top={true} style={{height: 250}}/>
              <CardBody>
                <CardTitle>Italian restaurant</CardTitle>
                <CardTitle>イタリアンのレストランです。</CardTitle>
              </CardBody>  
              <div className="card-footer">
                <Link 
                  href="/restaurants?id=1"
                  as="/restaurants?id=1">
                    <a className="btn btn-primary">もっと見る</a>
                </Link>
              </div>
            </Card>
          </Col>  
          </>
        ))}
        
        <style jsx>
          {`
          a {
            color: white;
          }
          a:linl {
            text-decoation: none;
            color: white;
          }
          .card-colums {
            column-connt: 3;
          }
          `}
        </style>
      </Row>
      ) 
  } else return <h1>
    レストランが見つかりませんでした。
  </h1>

  
}
export default RestaurantsList;