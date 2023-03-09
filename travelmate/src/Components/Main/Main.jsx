import "./Main.css"

const Main = () => {

    //Array data container
    const Data = [{
        id:1,
        imgSrc:img,
        desTitle:'Bora Bora',
        location:'New Zealand',
        grade:"CULTURAL RELAX",
        fees:'700$',
        description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxuious stays and adventurous activities.'
    }
    // {
    //     id:2,
    //     imgSrc:img2,
    //     desTitle:'Machu Picchu',
    //     location:'Peru',
    //     grade:"CULTURAL RELAX",
    //     fees:'600$',
    //     description:'Huyana Picchu is a mountain in Peru, rising over Machu Picchu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    // },
    // {
    //     id:3,
    //     imgSrc:img3,
    //     desTitle:'Great Barrier Reef',
    //     location:'Australia',
    //     grade:"CULTURAL RELAX",
    //     fees:'700$',
    //     description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place.'
    // },
    // {
    //     id:4,
    //     imgSrc:img4,
    //     desTitle:'Cappadocia',
    //     location:'Turkey',
    //     grade:"CULTURAL RELAX",
    //     fees:'800$',
    //     description:'According to the World Tourism Ranking, 45 Millions people visit Turkey each year, and from that about 2 Millions visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
    // },
    // {
    //     id:5,
    //     imgSrc:img5,
    //     desTitle:'Guanajuato',
    //     location:'Mexico',
    //     grade:"CULTURAL RELAX",
    //     fees:'1100$',
    //     description:'A city in central Mexico, Guanajuato is known for its history silver mining and colonial archtecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
    // },
    // {
    //     id:6,
    //     imgSrc:img6,
    //     desTitle:'Cinque Terre',
    //     location:'Italy',
    //     grade:"CULTURAL RELAX",
    //     fees:'840$',
    //     description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and you love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food.'
    // },
    // {
    //     id:7,
    //     imgSrc:img7,
    //     desTitle:'Angkor wat',
    //     location:'Cambodia',
    //     grade:"CULTURAL RELAX",
    //     fees:'790$',
    //     description:'Angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
    // },
    // {
    //     id:8,
    //     imgSrc:img8,
    //     desTitle:'Taj Mahal',
    //     location:'India',
    //     grade:"CULTURAL RELAX",
    //     fees:'900$',
    //     description:'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
    // },
    // {
    //     id:9,
    //     imgSrc:img9,
    //     desTitle:'Bali Island',
    //     location:'Indonesia',
    //     grade:"CULTURAL RELAX",
    //     fees:'500$',
    //     description:'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known fir uts volcantic mountains, history, art, culture, food, temples and beautiful sandy beaches.'
    // }
]





    return (
        <div className="main-container">
            <div className="title-container">
                <div className="container-title">
                    <h3>Most visited destinations</h3>
                </div>
            </div>
            <div className="places-grid">
                {Data.map(({id, imgSrc, desTitle, location, grade, fees, description}) => {
                    
                })
            }
            </div>
        </div>



    )
}

export default Main;