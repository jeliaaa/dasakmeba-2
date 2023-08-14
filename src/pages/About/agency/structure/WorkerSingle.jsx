import React, { useEffect, useState } from 'react'
import { Accordion, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PageHeadings from '../../../../ReusableComponents/pages_headings/PageHeadings';
import { useTranslation } from 'react-i18next';

const WorkerSingle = () => {
    const [worker, setWorker] = useState([]);
    const { id } = useParams();
    const { t } = useTranslation();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setWorker(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
            <PageHeadings heading={'structure'}>
                <Breadcrumbs forbread={'agency'} />
            </PageHeadings>
            <Container className='p-4'>
                <div className='worker_card'>
                    <img src='https://placehold.co/400' alt='...' />
                    <div className='col-md-7 h-100'>
                        <h4>{t('nameSurname')} : {worker.name}</h4>
                        <h4>{t('username')} : {worker.username}</h4>
                        <Accordion defaultActiveKey="0" flush style={{width:'80%'}}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>გამოცდილება</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>გამოცდილება</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </Container>
        </Container>
    )
}

export default WorkerSingle