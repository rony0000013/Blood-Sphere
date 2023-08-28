import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    return (
        <div className="p-[5vw] m-[2vw]  w-[96vw] " data-aos="fade-up">
            <h1 className="text-center text-4xl font-bold mb-5" data-aos="zoom-out">Getting Started with the BOT</h1>
            <Accordion defaultActiveKey={['0']} >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header >Install Telegram on Device</Accordion.Header>
                    <Accordion.Body className="bg-gray-200">
                        Install Telegram on your device from <a href="https://telegram.org/">HERE</a> or use Telegram Web from <a href="https://web.telegram.org/">HERE</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Add Blood Sphere Bot to Telegram</Accordion.Header>
                    <Accordion.Body>
                        Click on <a href="https://t.me/blood_sphere_bot">Blood Sphere Bot</a> to add it to your Telegram account.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Use /start to start interacting with the bot</Accordion.Header>
                    <Accordion.Body>
                        Use /start command to start the BOT. There will be 2 options to choose. You can either search for blood or donate blood.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Use /get to search Blood Groups</Accordion.Header>
                    <Accordion.Body>
                        Use /get command to search for blood groups. You can search for blood groups by typing the blood group name.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Use /donate to search for nearby Blood Donation Camps</Accordion.Header>
                    <Accordion.Body>
                        Use /donate command to search for nearby blood donation camps. You can search for blood donation camps by typing the pincode number of that area.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Enter pincode number of that area where you're finding for blood</Accordion.Header>
                    <Accordion.Body>
                        Enter the pincode number of that area where you're finding for blood. You will get the list of Hospitals and Blood Donation Camps that are available in that area.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
