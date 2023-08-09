import React from 'react'
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './baseInfo.scss'
import PageHeadings from '../../../../ReusableComponents/pages_headings/PageHeadings';
const BaseInfo = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <PageHeadings heading={'baseInfo'} />
            <Container className='p-5 mt-3'>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed quaerat consequatur dolore! Dolore voluptas iusto atque provident consequuntur quo sed, distinctio quae incidunt temporibus voluptatibus assumenda labore, harum sit?</p>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, neque facilis vitae cupiditate quam impedit quas autem fugiat nihil rerum repellat, fugit animi veritatis et consectetur, totam sunt dolore voluptate.</p>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, neque facilis vitae cupiditate quam impedit quas autem fugiat nihil rerum repellat, fugit animi veritatis et consectetur, totam sunt dolore voluptate.</p>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, neque facilis vitae cupiditate quam impedit quas autem fugiat nihil rerum repellat, fugit animi veritatis et consectetur, totam sunt dolore voluptate.</p>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, neque facilis vitae cupiditate quam impedit quas autem fugiat nihil rerum repellat, fugit animi veritatis et consectetur, totam sunt dolore voluptate.</p>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ad sunt sequi porro nisi eveniet corrupti, sint eius autem, fugit consectetur quis quos eligendi nulla similique modi veritatis quidem voluptate.</p>
                <h4>lor</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ad sunt sequi porro nisi eveniet corrupti, sint eius autem, fugit consectetur quis quos eligendi nulla similique modi veritatis quidem voluptate.</p>

            </Container>
        </Container>

    )
}

export default BaseInfo