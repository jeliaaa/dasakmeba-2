import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import vacData from './VacancyData.json'
import { pink, yellow } from '@mui/material/colors';
import './vacancy.scss'

const Vacancy = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState([]);
    const handleClick = (num) => {
        setActive(prevState =>
            prevState.includes(num)
                ? prevState.filter(item => item !== num)
                : [...prevState, num]
        );
    };
    const filteredVacancies = vacData.filter(vacancy => active.includes(vacancy.type));
    return (
        <div className='vacancy_wrapper'>
            <div className='vacancy_container' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <FormControl className='filter_main' component={'fieldset'} >
                    <FormControlLabel
                        value={t('conference')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }}
                            onClick={() => handleClick(1)} />}
                        label={t('conference')}
                        labelPlacement="start"
                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('employement')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(2) }} />}
                        label={t('employement')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('familyWork')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(3) }} />}
                        label={t('familyWork')}
                        labelPlacement="start"
                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('internship')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(4) }} />}
                        label={t('internship')}
                        labelPlacement="start"
                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('lectures')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(5) }} />}
                        label={t('lectures')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('professional')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(6) }} />}
                        label={t('professional')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('trainings')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(7) }} />}
                        label={t('trainings')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('volunteering')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(8) }} />}
                        label={t('volunteering')}
                        labelPlacement="start"

                    />
                </FormControl>


            </div>
            <div className='filter_bottom'>
                {filteredVacancies.map((vacancy) => (
                    vacancy.industries && (
                        Object.keys(vacancy.industries).map((industryKey) => (
                            <FormControl className='vacancy_filter' component={'fieldset'} key={industryKey}>
                                <p>{vacancy.parent}</p>
                                <p className='quantity'>{vacancy.industries[industryKey].quantity}</p>
                                <FormControlLabel
                                    value={vacancy.industries[industryKey].name}
                                    control={<Checkbox sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }} onClick={() => { handleClick(8) }} />}
                                    label={vacancy.industries[industryKey].name}
                                    labelPlacement="start"
                                />
                            </FormControl>
                        ))
                    )
                ))}
            </div>

        </div>
    )
}

export default React.memo(Vacancy)