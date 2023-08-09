import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import PageHeadings from '../../../../ReusableComponents/pages_headings/PageHeadings'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './worker.scss'

const Structure = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <Container>
            <PageHeadings heading={'structure'} />
            <Container>
                <Table responsive>
                    <thead>

                        <tr>
                            <th></th>
                            <th>{t('agencyStructure')}</th>
                            <th>{t('position')}</th>
                            <th>{t('nameSurname')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(worker => {
                            return (
                                <tr key={worker.id}>
                                    <td>{worker.id}</td>
                                    <td>{worker.address.city}</td>
                                    <td>{worker.email}</td>
                                    <td><Link to={`worker/${worker.id}`}>{worker.name}</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )
}

export default Structure