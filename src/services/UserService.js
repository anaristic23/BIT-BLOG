import BASE_ENDPOINT from '../shared/constants';
import Author from '../entities/Author';

const fetchAuthors = () => {
    const urlAuthors = BASE_ENDPOINT + "/users";

    return fetch(urlAuthors)
        .then(response => response.json())
        .then(data => {
            const users = data.map(data => {
                return new Author(data.id, data.name)
            })
            console.log(users);

            return users;
        })

}


export { fetchAuthors }