const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");


const questions = [
    {
        id: 0,
        text: "Pick a vacation destinations:",
        answers: [
            {
                text: "Mendoza",
                image:"https://www.losandes.com.ar/resizer/s5A9cM7YpM4cUHDB517WZMfZzbI=/1023x681/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/F4KKDP5DM5DIVKQDW6KIFGB2IU.jpg",
                alt:"Photo of Mendoza",
            },
            {
                text: "Salta",
                image:"https://media.istockphoto.com/photos/hill-of-the-seven-colors-picture-id1013342634?k=20&m=1013342634&s=612x612&w=0&h=yARZgnPfoOMffAmMt-iOBr8wlmXLywCN9YTLceM-gXE=",
                alt:"Photo of Salta",
            },
            {
                text: "Bariloche",
                image:"https://barilocheturismo.gob.ar/images/news/upload/144_54480854-0594-4512-bbf1-a2a5597709d8.jpg",
                alt:"Photo of Bariloche",
            },
            {
                text: "Tierra del Fuego",
                image:"https://wanderlust.com.ar/wp-content/uploads/2018/10/ushuaia-tierra-del-fuego-ok2.jpg",
                alt:"Photo of Tierra del Fuego",
            }
        ]
    },

    {
        id:1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image:"https://fotos.perfil.com/2022/02/09/trim/1040/780/pizza-1310709.jpg",
                alt:"Pizza",
            },
            {
                text: "Sushi",
                image:"https://www.recetasderechupete.com/wp-content/uploads/2021/06/Sushi-y-nigiris-variados.jpg",
                alt:"Sushi",
            },
            {
                text: "Tequeños",
                image:"https://www.paulinacocina.net/wp-content/uploads/2021/10/tequen%CC%83os-venezolanos.jpg",
                alt:"Tequeños",
            },
            {
                text: "Papas fritas",
                image:"https://www.eltiempo.com/files/image_1200_680/uploads/2021/04/15/6078c68c2f49b.jpeg",
                alt:"Papas Fritas",
            },
        ]

    },
    {
        id:2,
        text: "Pick a home:",
        answers: [
            {
                text: "Tradicional",
                image:"https://www.arkiplus.com/wp-content/uploads/2014/11/casa-tradicional.jpeg",
                alt:"Casa Tradicional",
            },
            {
                text: "Casa Moderna",
                image:"https://decoraideas.com/wp-content/uploads/2019/08/04-4-768x536.jpg",
                alt:"Casa Moderna",
            },
            {
                text: "Departamento",
                image:"https://elcomercio.pe/resizer/02VIzTJ4A2UsfFhDU5Fp-HWFLp4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5N6HAL2ZAZBIFN5M4ZPSXC7LOQ.jpg",
                alt:"Departamento",
            },
            {
                text: "Cabaña",
                image:"https://i.pinimg.com/originals/4c/2f/09/4c2f090d7c3c237a238c8c200c53fa2c.jpg",
                alt:"Cabaña en las montañas",
            },
        ]
    }
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')

        const tilteHeading = document.createElement('h2')
        tilteHeading.textContent = question.text
        titleBlock.append(tilteHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add("answer-options")

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add("answer-block")
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))

            const answerImage = document.createElement('img')
            answerImage.setAttribute("src", answer.image)
            answerImage.setAttribute("alt", answer.alt)

            const answerTitle = document.createElement("h3")
            answerTitle.textContent = answer.text


            answerBlock.append(answerImage, answerTitle)

            answersBlock.append(answerBlock)

        })

        questionDisplay.append(answersBlock)


    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId) )
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove)
    }
    
}