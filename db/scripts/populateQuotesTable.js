import { quotesQuery } from "..";
import quotes from "../../quotes-data"; 

async function populateQuotesTable (){
    for (let i = 0; i < quotes.length; i++) {
        const name = quotes[i].name;
        const quote = quotes[i].quote;

        const res = await quotesQuery
        (`INSERT INTO quotes (name, quote)
        VALUES ($1, $2) RETURNING quote`,
        [name, quote]
        ); 
        
    }
}

populateQuotesTable();


