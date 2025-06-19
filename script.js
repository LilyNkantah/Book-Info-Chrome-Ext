async function fetchData() {
    const res = await fetch ("https://www.googleapis.com/books/v1");
    const record = await res.json();
    document.getElementById("title").innerHTML = record.data[0].title;
    document.getElementById("author").innerHTML = record.data[0].author;
    document.getElementById("pdate").innerHTML = record.data[0].pdate;
}
fetchData();