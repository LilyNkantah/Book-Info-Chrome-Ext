function addRow(number) {
    var tbody = document.getElementById("myTbody");
    var row = document.createElement("tr");
    var titlecolumn = document.createElement("td");
    var authorcolumn = document.createElement("td");
    var pdatecolumn = document.createElement("td");
    titlecolumn.setAttribute("id", "title-" + number);
    authorcolumn.setAttribute("id", "author-" + number);
    pdatecolumn.setAttribute("id", "pdate-" + number);
    row.appendChild(titlecolumn);
    row.appendChild(authorcolumn);
    row.appendChild(pdatecolumn);
    tbody.appendChild(row);
}

async function fetchData() {
    const requestOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch ("https://www.googleapis.com/books/v1/users/110341054026777136515/bookshelves/2/volumes", requestOptions);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const record = await response.json(); //.json() parses the response into a JS dictionary
        console.log(record["items"]);

        for (i = 0; i < record["items"].length; i++) {
            console.log(i);
            if (i != 0) {
                addRow(i);
            }
            document.getElementById("title-" + i).innerHTML = record["items"][i]["volumeInfo"]["title"];
            document.getElementById("author-" + i).innerHTML = record["items"][i]["volumeInfo"]["authors"];
            document.getElementById("pdate-" + i).innerHTML = record["items"][i]["volumeInfo"]["publishedDate"];
        }
    } catch(error) {
        console.error(error);
    } 
}
fetchData();