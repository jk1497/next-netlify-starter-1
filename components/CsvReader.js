import { useState } from "react"

export default function CsvReader(){
    // const [csvFile, setCsvFile] = useState();

    const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
    const listItems = myList.map((myList)=>{   
        return <li>{myList}</li>;   
    });  

    // const submit = () => {
    //     const file = csvFile;
    //     const reader = new FileReader();

    //     reader.onload = function(e) {
    //         const text = e.target.result;
    //     }

    //     reader.readAsText(file);
    // }

    return(
        <form id = "csv-form">
        {listItems}
        </form>
    );
}