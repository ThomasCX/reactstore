import React from "react";

import {Container,
    AboutTile,
    Title,
    AboutContainer, HR
} from './about.styles'


const AboutPage = () => (
    <Container>
        <Title>About Us</Title>
        <AboutContainer>
            We are a Barbadian company catering for offering the best designs possible.
            With an exclusive taste and a wide selection of styles, you cannot go wrong with us.
            Men’s and Women's wear/accessories crafted for you in numerous colours and refined materials.
        </AboutContainer>
        <HR/><HR/>

        <AboutTile>Who Are We</AboutTile>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis luctus dui et varius. Nunc venenatis scelerisque congue.
            Donec lobortis orci eget justo accumsan consectetur. Donec congue vehicula tristique. Quisque tristique est vitae tincidunt luctus.
            Sed nibh nisi, bibendum eu erat et, egestas tincidunt tortor. Nunc id enim sit amet dui imperdiet condimentum feugiat vel leo.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed velit ut turpis luctus mollis.
            Proin interdum erat eu elit imperdiet tristique. Mauris malesuada purus a metus tristique, non tempus eros lacinia.
            Mauris elit urna, tempus vitae ipsum quis, porttitor rhoncus tortor. Proin interdum eu nulla nec ullamcorper.
            Etiam commodo risus vitae fringilla dictum. Sed faucibus, sapien quis facilisis vulputate, tellus lacus finibus metus,
            at commodo arcu libero mattis arcu. Duis viverra nulla ac massa efficitur tristique. Morbi vel tempus enim, vitae imperdiet eros.
            Proin pharetra odio mauris, sed imperdiet lorem vestibulum nec.
        </span>

        <AboutTile>
            How We Work
        </AboutTile>
        <span>
            Aliquam eget nibh eu nunc lacinia pretium. In massa massa, aliquet ac hendrerit non, faucibus in libero.
            Aliquam blandit leo lectus, nec auctor justo fermentum nec. Proin placerat placerat eros sit amet sagittis.
            Ut tellus tellus, laoreet non nulla eu, porta dictum ipsum. Maecenas vehicula quam nec dolor efficitur, non ullamcorper mauris luctus.
            Nullam tristique neque eget nisi iaculis, in tristique nunc egestas. Fusce mauris ex, viverra eu nisi sed,
            volutpat consectetur dolor. Aenean sit amet suscipit ante.
            Duis at urna id sapien laoreet pharetra. Praesent enim arcu, bibendum vel nisi egestas, elementum ornare purus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eget aliquam arcu.
            Mauris gravida justo nibh, ut convallis felis mollis eget. Sed eleifend velit vitae mi mollis cursus vitae non lacus.
            Curabitur id neque et diam condimentum condimentum sed ut tellus.
            Vestibulum turpis lectus, bibendum vitae sodales non, tempor non nulla. Quisque eu euismod augue. Proin ipsum lectus,
            iaculis nec velit id, tincidunt pellentesque velit. Sed congue congue turpis nec elementum. Mauris egestas at magna at commodo.
            Phasellus pretium nisi sed leo tempor venenatis in ac diam. Proin id turpis vitae felis commodo consectetur nec a mi. Sed convallis gravida tempus.
            In urna metus, facilisis in vehicula in, gravida vel elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </span>
    </Container>


)
export default AboutPage;
