import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from '../story/Story';


const Stories = () => {
        const [suggestions, setSuggestions] = useState([]);
        useEffect(() => {
          const suggestions = [...Array(20)].map((_, i) => ({
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.url(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            key: i,
          }));
          setSuggestions(suggestions);
          console.log(suggestions[0].avatar);
        }, []);


    return (
        <div className="flex justify-start p-4  items-center h-28 overflow-X-visible w-screen md:w-full lg:w-full xl:w-full object-cover overflow-x-scroll">
            {suggestions.map((item) => {
                console.log(item.avatar);
              return <Story className='' key={item.key} avatar={item.avatar} username={item.username} />
            })}
        </div>
    );
}

export default Stories;