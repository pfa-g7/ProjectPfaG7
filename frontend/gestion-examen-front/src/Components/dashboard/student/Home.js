import {Button, Col, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import {getUserFromLocalCache} from "../../../utils/auth";
import "../../../Css/Home.css";
import emsi from "../../image/emsi.png";
import QRCode from "qrcode.react";
import html2pdf from 'html2pdf.js';

const Home = () => {
    const [student, setStudent] = useState([]);

    function exportToPDF() {
        const element = document.getElementById('divToExport');
        html2pdf().from(element).save('exported.pdf');
    }

    useEffect(() => {
        console.log(getUserFromLocalCache())
        setStudent(getUserFromLocalCache);
    }, []);
    return (
        <div className="container m-3 bg-light shadow ">
            <Row>
                <Col md={8}></Col>
                <Col md={4}>
                    <Button style={{width: '100%'}} className="btn text-black hover:text-white btn-dark" onClick={exportToPDF}>
                        IMPRIMER
                    </Button>
                </Col>
            </Row>
            <Row className="p-8" id="divToExport">
                <Col lg="12">
                    <h1 className="text-2xl font-bold text-center">Convocation des examens</h1>
                    <h2>Année Universitaire : 2022/2023</h2>
                    <img src={emsi} alt="emsi"/>
                </Col>
                <Col lg="12">
                    <div className="info">
                        <div className="student__info">
                            <span>CNE: </span> <strong> {student.cne}</strong>
                        </div>
                        <div  className="student__info">
                            <span>Numero Appoge: </span> <strong>{student.numAppoge}</strong>
                        </div>
                        <div  className="student__info">
                            <span>Nom: </span> <strong>{student.firstName}</strong>
                        </div>
                        <div  className="student__info">
                            <span>Prenom: </span> <strong>{student.lastName}</strong>
                        </div>

                        <div>
                        </div>
                        <p id="a">Vous êtes convoqué(e) aux examens finaux session juin à École Marocaine des Sciences
                            de l'Ingénieur selon le planning que vous avez recevez et selon votre filière et vous devrez
                            être présent(e) muni(e) de cette convocation, de votre pièce d'identité à jour et 30 minutes
                            avant les épreuves devant votre salle. </p>

                        <p id="b"></p>

                        <p><b>Nous vous rappelons que les consignes de l'examen :</b></p>
                        <p>- Interdiction formelle d'introduire tout document à l'interieur de la salle d'examen sauf en
                            cas d'examen avec documents autorisés.</p>
                        <br/>
                        <p>- Interdiction formelle d'utiliser les portables pendant l'examen.</p>
                        <br/>
                        <p>- Toute fraude ou tentative de fraude sera sanctionnée conformément à la réglemetaion
                            en vigueur.</p>

                    </div>
                </Col>
                <Col md={4}></Col>
                <Col md={4}></Col>
                <Col md={4}>
                    <QRCode
                        value={`Appoge: ${student?.numAppoge}\n CNE: ${student?.cne}\n firstName: ${student?.firstName}\n lastName: ${student?.lastName}`}
                        size={200}/>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
