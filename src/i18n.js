// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      main: 'Main',
      versionForBlind: 'Version for people with poor vision',
      about: "About",
      baseInfo: "Base information",
      brand : 'Brand',
      structure: "Structure",
      gallery: "Gallery",
      news: "News",
      ourServices: 'Our Services',
      partners: "Partners",
      projects: "Projects",
      stats: "Statistics",
      researches: "Researches",
      aboutServices: "About our Services",
      services: "Services",
      grants: "Grants and programmes",
      migration: "Migration",
      career: "Career",
      blog: "Blog",
      articles: "Articles",
      lessons: "Lessons",
      profesiograma: "Profession",
      classification: "Classification",
      calendar: "Calendar",
      media : "Media",
      vacancy : "Vacancy",
      employement: 'Employement',
      internship: 'Internship',
      volunteering: 'Volunteering',
      familyWork: 'Work in families',
      guide: "Guide",
      instructions: "Instructions",
      qA: "Q&A",
      contacts: "Contact us",
      pubInfo: "Public info",
      //mainpage
      companies: "Companies",
      seekers: "Seekers",
      activePlaces: "Active workplaces",
      alreadyWorks: "Already works",
      adviceTaken: "Advice taken",
      educationalProgrammes: "Educational Programmes",
      statements: 'Statements',
      //strucure
      agencyStructure: 'Agency Structure',
      worker: 'Team member',
      position : "Position",
      nameSurname: "Name, Surname",
      username: "Username"
    },
  },
  ge: {
    translation: {
      main: 'მთავარი',
      versionForBlind: 'ვერსია სუსტი მხედველობის მქონე პირთათვის',
      about: "ჩვენს შესახებ",
      baseInfo: "მთავარი ინფორმაცია",
      brand : 'ბრენდი',
      structure: "სტრუქტურა",
      ourServices: 'ჩვენი სერვისები',
      gallery: "გალერეა",
      news: "ახალი ამბები",
      partners: "პარტნიორები",
      projects: "პროექტები",
      stats: "სტატისტიკა",
      researches: "კვლევები",
      aboutServices: "სერვისების შესახებ",
      services: "სერვისები",
      grants: "გრანტები და პროგრამები",
      migration: "მიგრაცია",
      blog: "ბლოგი",
      articles: "სტატიები",
      lessons: "გაკვეთილები",
      profesiograma: "პროფესიოგრამა",
      classification: "კლასიფიკაცია",
      calendar: "კალენდარი",
      media : "მედია",
      vacancy : "ვაკანსია",
      employement: 'დასაქმება',
      internship: 'სტაჟირება',
      volunteering: 'მოხალისეობა',
      familyWork: 'ოჯახში დასაქმება',
      guide: "გზამკვლევი",
      instructions: "ინსტრუქციები",
      qA: "კითხვა-პასუხი",
      contacts: "კონტაქტები",
      pubInfo: "საჯარო ინფორმაცია",
      //mainpage
      companies: "კომპანია",
      seekers: "მაძიებელი",
      activePlaces: "აქტიური ვაკანსია",
      alreadyWorks: "უკვე დასაქმდა",
      adviceTaken: "მიიღო კონსულტაცია",
      educationalProgrammes: "საგანმანათლებლო პროგრამები",
      statements: 'განცხადებები',
      //strucure
      agencyStructure: 'სააგენტოს სტრუქტურა',
      worker: 'გუნდის წევრი',
      position : "პოზიცია",
      nameSurname: "სახელი, გვარი",
      username: "მეტსახელი"
    },
  },
  // Add more languages and translations as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ge", // Default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
