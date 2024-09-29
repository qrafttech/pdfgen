# Pdfgen

PDF generation API

## Usage

Send a POST request to the `/generate` endpoint with a JSON body containing the HTML you want to convert to a PDF.

```curl
curl -X POST "https://pdfgen.so/api/v1/generate" -H "Content-Type: application/json" -d '{"html": "<h1>Hello World</h1>"}'
```

The response will contain the PDF file.

> PDFs are generated synchronously and are not saved to disk.
