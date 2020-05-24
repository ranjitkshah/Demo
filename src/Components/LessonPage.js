import React from 'react'
import styles from '../CompStyles/lessonPage.module.css';
import LessonCard from './Utilities/LessonCard'
import { Link } from 'react-router-dom';


function LessonPage() {

    return (
        <div>
            <div style={{ marginTop: "80px" }} className={styles.lessonCards}>
               <Link className={styles.link} to="/video"> <LessonCard title="Hindi" percentage="3" background="125deg, #2375D3 0%, #3BA9FE 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="Telugu" percentage="20" background="125deg, #1D976C 0%, #9DD138 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="science" percentage="50" background="125deg, #F03748 0%, #F78179 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="english" percentage="60" background="125deg, #A36CFC 0%, #DAACE0 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="Telugu" percentage="20" background="125deg, #1D976C 0%, #9DD138 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="general" percentage="99" background="125deg, #2375D3 0%, #67D0E8 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="english" percentage="60" background="125deg, #A36CFC 0%, #DAACE0 100%"></LessonCard></Link>
               <Link className={styles.link} to="/video"> <LessonCard title="Hindi" percentage="3" background="125deg, #2375D3 0%, #3BA9FE 100%"></LessonCard></Link>
             
              
            </div>
            
        </div>
    )
}

export default LessonPage
