import Card from "./Card"
import kareninaImage from"../Assets/karenina.jpg"
import crimeImage from"../Assets/crime.jpg"
import metamorphosisImage from"../Assets/metamorphosis.jpg"

import React from 'react'

const cardData = [
    {
      id:1,
      title: "Anna Karenina",
      image: kareninaImage,
      characters: ['Anna Karenina', 'Aleksey Vronsky'],
      description: "more"
    },
    {
      id:2,
      title: "Crime and Punishment",
      image: crimeImage,
      characters: ["Rodion Raskolnikov", "Sonya Marmeladova"],
      description: "more"
    },
    {
      id:3,
      title: "Metamorphosis",
      image: metamorphosisImage,
      characters: ["Gregor Samsa", "Grete Samsa"],
      description: "more"
    }
  ];
  

const CardList = () => {
    function action(title, characters) {
        console.log(`Characters of "${title}" are: ${characters.join(' and ')}`);
    

    }
  return (
    <div className="cardlist">
        {cardData.map((card) => <Card key={card.id} title={card.title} image={card.image} characters={card.characters} description={card.description} action={action}/>)}
    {/* <Card title="Love" image={kareninaImage} characters={['Anna Karenina', 'Aleksey Vronsky']} description="more"/>
    <Card title="Crime" image={crimeImage} characters={["Rodion Raskolnikov", "Sonya Marmeladova"]} description="more"/> 
    <Card title="Family" image={metamorphosisImage} characters={["Gregor Samsa"," Grete Samsa"]} description="more"/> */}
    </div>
  )
}

export default CardList