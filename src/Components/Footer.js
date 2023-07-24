import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#808080' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: ' rgba(0, 255, 0, 0.3)' }}>
        © 2023 copyright: 
        <a className='text-white' href='#'>
            teemusik.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;       