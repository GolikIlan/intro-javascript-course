var headers = ["id", "name", "country"]
var values = [
    {
        "id": 1,
        "name": "first place",
        "place": "israel"
    },
    {
        "id": 2,
        "name": "second place",
        "place": "canada"
    },
    {
        "id": 3,
        "name": "third place",
        "place": "USA"
    }
]

document.write("<table border='1' width='100%'>");
document.write("<tr>");
for (var header in headers) {
    document.write("<th>");
    document.write(headers[header]);
    document.write("</th>");
}
document.write("</tr>");
for (var row in values) {
    document.write("<tr>");
    for (var value in values[row]) {
        document.write("<td>");
        document.write(values[row][value]);
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
