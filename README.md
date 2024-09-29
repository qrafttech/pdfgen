# Pdfgen

PDF generation API

## Usage

### Using cURL

Send a POST request to the `/generate` endpoint with a JSON body containing the HTML you want to convert to a PDF.

```curl
curl -X POST "https://pdfgen.so/api/v1/generate" -H "Content-Type: application/json" -d '{"html": "<h1>Hello World</h1>"}'
```

The response will contain the PDF file.

> PDFs are generated synchronously and are not saved to disk.

### Bruno

[_Bruno_](https://docs.usebruno.com/introduction/what-is-bruno) API client collection is saved in the `bruno` folder. [Import](https://docs.usebruno.com/get-started/import-export-data/import-collections) the collection and run it to test the API.
