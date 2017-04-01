'use strict';

angular.module('ttca')

    .controller('homeController', ['$scope', function ($scope) {

        $scope.images = [{
            src: "images/ttca.png",
            href: "#one!"
        },
        {
            src: "images/carousel/1.jpg",
            href: "#two!"
        },
        {
            src: "images/carousel/2.jpg",
            href: "#three!"
        },
        {
            src: "images/carousel/3.jpg",
            href: "#four!"
        },
        {
            src: "images/carousel/4.jpg",
            href: "#five!"
        }
        ]

    }])

    .controller('whatWeDoController', ['$scope', function ($scope) {

    }])

    .controller('academicsController', ['$scope', function ($scope) {
        $scope.records = [{
            id: 0,
            title: "Projects",
            text: "Many projects are undertaken by students and the faculty members as part of their academic curriculum or research activities. Interested students can identify their area of interest among these projects and can be a part of it. This would help the students to get hands on experience of the technology in their respective domain."
        },
        {
            id: 1,
            title: "Advija",
            text: "ADVIJA, is a platform for knowledge sharing and career guidance, among the Gulties of NITC. The faculty members and final year students talk about the various policies and procedures of the college, support systems available for deserving students and their experiences in the college. The commendable interactive session has been a great opportunity for the freshers to know about the vastness of their stream of study and their career."
        },
        {
            id: 2,
            title: "Student Achievements",
            text: "Student Guidance Cell (SGC) aims to provide guidance and counselling services to students based on their needs with assured privacy and confidential exchange of communication. SGC also provides academic support in the form of special classes for students. SGC helps the students to function better in all domains of life - academic, social, personal and psychological.The motive behind SGC stems from the need to facilitate the process of growth and maintain a positive well being of the students.The counselling services offered by SGC empowers the students to have enhanced ability to solve problems,make decisions as well as make them more efficient in tackling personal problems.In a nut shell,it is aimed at enhancing their ability to utilize the best potential available in them.The SGC avails the help of two trained clinical psychologists who are available in the institute."
        },
        {
            id: 3,
            title: "NITC Academics "
        },
        {
            id: 4,
            title: "SGC",
            text: "Student Guidance Cell (SGC) aims to provide guidance and counselling services to students based on their needs with assured privacy and confidential exchange of communication. SGC also provides academic support in the form of special classes for students. SGC helps the students to function better in all domains of life - academic, social, personal and psychological. The motive behind SGC stems from the need to facilitate the process of growth and maintain a positive well being of the students. The counselling services offered by SGC empowers the students to have enhanced ability to solve problems, make decisions as well as make them more efficient in tackling personal problems. In a nut shell, it is aimed at enhancing their ability to utilize the best potential available in them"
        },
        {
            id: 5,
            title: "New Updates "
        },
        ]
    }])

    .controller('eventsController', ['$scope', function ($scope) {
        $scope.records = [{
            id: 0,
            title: "Ugadi",
            text1: "Ugadi is the New Year's Day for the Hindus of Andhra Pradesh, Karnataka and Telangana state in India. It is festively observed in these regions on the first day of the Hindu lunisolar calendar month of Chaitra. This typically falls in March or April of the Gregorian calendar.",
            text2: "Ugadi is celebrated in NITC by the Telugu students, faculty and families in and around Calicut. It is mainly organized by the final year B.tech students. It is celebrated as a daylong event and an atmosphere is created, where in everyone can get a feel of their own state. The events such as Treasure hunt and sports competitions begin well before the day of Ugadi, this keeps the spirits of the people high. On the day of the celebration, students take part in cultural programs with great enthusiasm and make the day worth remembering."
        },
        {
            id: 1,
            title: "Diwali",
            text1: "Diwali is a well known Indian festival celebrated throughout the nation. Leaving no stones unturned, NITC also celebrates the festival in its own way. ",
            text2: "The telugu speaking community of NITC start off the celebration with a warm gathering in the morning and then join the rest of NITC in the evening, to enjoy the fireworks. The students dress up in their best outfit to celebrate the day with their collage mates. The responsibility of managing the event is taken by the second year B.tech students."
        },
        {
            id: 2,
            title: "Vinayaka Chaviti",
            text1: "Ganesh chaturthi being one of the most popular festival celebrated in India had a heart warning welcome in Nitc in this year . Students belonging to various states of the country got together to celebrate the festival in an enthusiast manner bringing along their very own traditions from their respective states which made it more fun filled and joyful. The 'Ladoos' were enjoyed along with  crazy sound tracks played on the eve... People came together to put up a great mix of  Western , Indian including the 'bhangra(from punjab)', 'dandhiya (from gujrat)' and other forms of dances... The chief guest being the director of the college , gave his Blessing to the students to make it more special.",
        },
        {
            id: 3,
            title: "Sankranthi"
        },
        ]
    }])

    .controller('sportsController', ['$scope', function ($scope) {
        $scope.records = [{
            id: 0,
            title: "Hockey"
        },
        {
            id: 1,
            title: "Hand ball"
        },
        {
            id: 2,
            title: "Cricket"
        },
        {
            id: 3,
            title: "Kabaddi"
        },
        {
            id: 4,
            title: "Kho-Kho"
        },
        {
            id: 5,
            title: "Volley ball"
        },
        {
            id: 6,
            title: "Foot ball"
        },
        {
            id: 7,
            title: "Chess"
        },
        {
            id: 8,
            title: "Carroms"
        },
        {
            id: 9,
            title: "Aquatics"
        },
        {
            id: 10,
            title: "Athletics"
        }
        ]
    }])

    .controller('alumniController', ['$scope', function ($scope) {
        $scope.batches = [{
            year: 2016,
            records: [{
                id: 0,
                img: "images/contacts/2016/1.jpg",
                name: "R. Venkatesh",
                email: "",
                phno: "8893403330"
            },
            {
                id: 1,
                img: "images/contacts/2016/2.jpeg",
                name: "Akhila M.",
                email: "",
                phno: "8137900338"
            },
            {
                id: 2,
                img: "images/contacts/2016/3.jpeg",
                name: "Ch. Durga Prasad",
                email: "",
                phno: "8714250771"
            },
            {
                id: 3,
                img: "images/contacts/2016/4.jpeg",
                name: "Venkata Akhil",
                email: "",
                phno: "9633838728"
            }
            ]
        },
        {
            year: 2017,
            records: [{
                id: 0,
                img: "images/contacts/2017/1.jpeg",
                name: "Puli Divya Anusha",
                email: "",
                phno: "7736875445"
            },
            {
                id: 1,
                img: "images/contacts/2017/2.jpeg",
                name: "Vanama Sai Charan",
                email: "",
                phno: "8137900338"
            },
            {
                id: 2,
                img: "images/contacts/2017/3.jpeg",
                name: "Bharghav Ram",
                email: "",
                phno: "8500483081"
            },
            {
                id: 3,
                img: "images/contacts/2017/4.jpeg",
                name: "N Devadeekshit",
                email: "",
                phno: "9567035698"
            },
            {
                id: 4,
                img: "images/contacts/2017/5.jpeg",
                name: "Rakasi Deekshit Reddy",
                email: "",
                phno: "8137900322"
            }
            ]
        },
        {
            year: 2018,
            records: [{
                id: 0,
                img: "images/contacts/2018/5.jpeg",
                name: "⁠⁠⁠Naveen",
                email: "",
                phno: "7736384935"
            },
            {
                id: 1,
                img: "images/contacts/2018/1.jpeg",
                name: "Ajit",
                email: "",
                phno: "8089190174"
            },
            {
                id: 2,
                img: "images/contacts/2018/3.jpeg",
                name: "Chaitanya",
                email: "",
                phno: "9895030658"
            },
            {
                id: 3,
                img: "images/contacts/2018/2.jpeg",
                name: "Praharrsha",
                email: "",
                phno: "9037341134"
            },
            {
                id: 4,
                img: "images/contacts/2018/4.jpeg",
                name: "Krishna",
                email: "",
                phno: "8891855568"
            },
            {
                id: 5,
                img: "images/contacts/2018/6.jpeg",
                name: "Navatheja",
                email: "",
                phno: "9491318578"
            }
            ]
        }
            // {
            //     year: 2019,
            //     records: [{
            //             id: 0,
            //             img: "images/VK.jpg",
            //             name: "Virat Kohli"
            //         },
            //         {
            //             id: 1,
            //             img: "images/jlo.jpg",
            //             name: "Jennifer Lopez"
            //         },
            //         {
            //             id: 2,
            //             img: "images/leod.jpg",
            //             name: "Leonardo DiCaprio"
            //         },
            //     ]
            // },
        ]
    }])


    .controller('placementsController', ['$scope', function ($scope) {

    }])

    .controller('aboutusController', ['$scope', function ($scope) {

        $scope.coordinators = [{
            year: "Fourth year boys",
            records: [{
                name: "M. JAYAKRISHNA",
                phno: "8137900339"
            },
            {
                name: "K. MANOJ KUMAR",
                phno: "8137905353"
            },
            {
                name: "CH. HASWANTH",
                phno: "766197551"
            },
            {
                name: "T. REVANTH",
                phno: "9037489481"
            },
            {
                name: "P. VAMSHIDHAR",
                phno: "8137900885"
            },
            {
                name: "P. LOKPRASANNA KUMAR",
                phno: "9037535369"
            },
            {
                name: "D. UDAY KUMAR",
                phno: "7736268853"
            },
            {
                name: "P. K. CHAITANYA",
                phno: "9544677801"
            },
            {
                name: "T. SAI BHARGAV",
                phno: "9567037105"
            },
            {
                name: "K. GAUTHAM",
                phno: "9037489477"
            },
            {
                name: "B. MALLIKHARJUNA REDDY",
                phno: "8137911288"
            },
            {
                name: "MADHU KIRAN",
                phno: "9037489680"
            },
            {
                name: "BHARGAV RAM",
                phno: "9544677451"
            },
            {
                name: "B. AKHILESH MUDIRAJ",
                phno: "8606070489"
            },
            {
                name: "DEEKSHITH REDDY",
                phno: "8137900322"
            },
            {
                name: "ESHWAR SAI PRATHAP",
                phno: "9567034322"
            },
            {
                name: "T. ADITHYA",
                phno: "8136882502"
            },
            {
                name: "D. SATHISH",
                phno: "9567034719"
            }
            ]
        },
        {
            year: "Fourth year girls",
            records: [{
                name: "V. GAYATHRI",
                phno: "9895113788"
            },
            {
                name: "M. SRAVANI",
                phno: "7736737369"
            },
            {
                name: "P. ANUSHA",
                phno: "7736875445"
            },
            {
                name: "A. ANUSHA",
                phno: "8137911336"
            }
            ]
        },
        {
            year: "Third year boys",
            records: [{
                name: "TARUN REDDY",
                phno: "9567758345"
            },
            {
                name: "BHARADWAJ ALLU",
                phno: "8089738885"
            },
            {
                name: "AKHEEB JAVED",
                phno: "8891570883"
            },
            {
                name: "ESWAR KUMAR",
                phno: "9037433445"
            },
            {
                name: "VIVEK ABUSHI",
                phno: "8089886707"
            },
            {
                name: "MANOJ KUMAR",
                phno: "8089299562"
            },
            {
                name: "JAYANTH KOGANTI",
                phno: "7736523435"
            },
            {
                name: "CHAITANYA. M",
                phno: "8089442008"
            }
            ]
        },
        {
            year: "Third year girls",
            records: [{
                name: "PALLLAVI PALLA",
                phno: "8136853789"
            },
            {
                name: "SAMEERA ADIBATLA",
                phno: "9746630929"
            }
            ]
        }
        ];

        $scope.faculty = [
            { name: "M.V.L.R Anjaneyulu", img: "images/about/faculty/1.jpg", email: "ranga@nitc.ac.in" },
            { name: "Dr. Kodi Ranga Swamy", img: "images/about/faculty/2.jpg", email: "ranga@nitc.ac.in" },
            { name: "Dr. Gangadhara Kiran Kumar L", img: "images/about/faculty/3.png", email: "ganga@nitc.ac.in" },
            { name: "Mr. B Rohinikumar", img: "images/about/faculty/4.jpg", email: "rohinikumar@nitc.ac.in" },
            { name: "Dr. M. Srinivas", img: "images/about/faculty/5.jpg", email: "msrinivas@nitc.ac.in" },
            { name: "Dr. G. Varaprasad", img: "images/about/faculty/6.jpg", email: "gvp@nitc.ac.in" },
            { name: "Mr. K Ratnakumar", img: "images/about/faculty/7.jpg", email: "ratna_kumar@nitc.ac.in" },
            { name: "Dr. Malladi V Pavan Kumar", img: "images/about/faculty/8.jpg", email: "malladi@nitc.ac.in" },
            { name: "Sreenu Naik Bhukya", img: "images/about/faculty/9.jpg", email: "bsnaik_81@nitc.ac.in" },
            { name: "Srinivasa T M", img: "images/about/faculty/10.png", email: "srini_2007@nitc.ac.in" },
            { name: "Dr. Vari Sivaji Reddy", img: "images/about/faculty/11.jpg", email: "sivaji@nitc.ac.in" }
        ]

    }]);