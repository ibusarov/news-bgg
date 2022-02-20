import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col
            className='text-center py-3 cards__item__img'
            style={{
              color: 'teal',
              textAlign: 'center',
              marginBottom: '30px',
              marginTop:'-30px'
            }}
          >
            Copyright &copy: K&G
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
