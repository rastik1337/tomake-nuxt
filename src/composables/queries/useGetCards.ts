export default async function useGetCards() {
    type CardsQuery = {
        cards: {
            id: number;
            price: number;
            button: string;
            description: string;
        }[];
    };
    const query = gql`
        query getCards {
            cards {
                id
                price
                button
                description
            }
        }
    `;
    const { data } = await useAsyncQuery<CardsQuery>(query);
    return data.value?.cards;
}
