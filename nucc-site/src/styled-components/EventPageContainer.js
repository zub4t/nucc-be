import styled from "styled-components";


export default styled.div`

    @media (max-width: 768px) {
        h1 {
            font-size: 1.5rem;
        }
        
        .container-fluid{
            margin-top: 40px;
        }
     }
     
     @media (min-width: 768px) {
      .navbar-toggle {
          display:none
      }
}


`;