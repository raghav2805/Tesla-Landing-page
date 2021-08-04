import React from 'react'
import Section from "./Section";

function Cars() {
    return (
        // <Container>
        <>
            <Section
                title="Model S"
                description="Order Online for "
                description_span="TOUCHLESS DELIVERY"
                image="model-s.jpg"
                leftbtn = "CUSTOM ORDER"
                rightbtn = "EXISTING INVENTORY"

            />
            <Section
                title="Model 3"
                description="Order Online for "
                description_span=" Touchless Delivery"
                image="model-3.jpg"
                leftbtn = "CUSTOM ORDER"
                rightbtn = "EXISTING INVENTORY"
            />
            <Section
                title="Model X"
                description="Order Online for "
                description_span="Touchless Delivery"
                image="model-x.jpg"
                leftbtn = "CUSTOM ORDER"
                rightbtn = "EXISTING INVENTORY"
            />
            <Section
                title="Model Y"
                description="Order Online for "
                description_span="Touchless Delivery"
                image="model-y.jpg"
                leftbtn = "CUSTOM ORDER"
                rightbtn = "EXISTING INVENTORY"
            />

            <Section
                title = "Solar Panels"
                description =  "Lowest Cost Solar Panels in America"
                description_span  = ""
                image =  "solar-panel.jpg"
                leftbtn = "Order Now"
                rightbtn = "Learn More"
            />
            
            <Section
                title = "Solar Roof"
                description =  "Produce Clean Energy From Your Roof"
                description_span  = ""
                image =  "solar-roof.jpg"
                leftbtn = "Order Now"
                rightbtn = "Learn More"
            />
            <Section
                title = "Accessories"
                description =  ""
                description_span  = ""
                image =  "accessories.jpg"
                leftbtn = "Shop Now"
                
            />

                {/* // </Container> */}
        </>
            )
}

            export default Cars;

// const Container = styled.div`
// `
