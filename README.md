# Pdfgen

PDF generation API

## Installation

You need [`node`](https://nodejs.org/en/) and we highly recommend installing it through a _Version Manager_, such as [`nvm`](https://github.com/creationix/nvm). The following will install `node` [LTS](https://nodejs.org/en/about/releases/) and `npm`

```sh
brew install nvm
nvm install --lts
```

We use `bun` to install dependencies and run the app. Use [`brew`](https://brew.sh/) 🍺 to [install it](https://bun.sh/docs/installation#macos-and-linux).

```sh
brew install oven-sh/bun/bun
```

Install the _Javascript_ dependencies

```sh
bun install
```

## Usage

Run the following command to start the server:

```sh
bun start
```

To start in development mode, with the server reloading on each file change, run:

```sh
bun dev
```

## Generate a PDF

### Using cURL

Send a POST request to the `/generate` endpoint with a JSON body containing the HTML you want to convert to a PDF.

```curl
curl -X POST "https://pdfgen.so/api/v1/generate" -H "Content-Type: application/json" -d '{"html": "<h1>Hello World</h1>"}'
```

The response will contain the PDF file.

> PDFs are generated synchronously and are not saved to disk.

### Bruno

[_Bruno_](https://docs.usebruno.com/introduction/what-is-bruno) API client collection is saved in the `bruno` folder. [Import](https://docs.usebruno.com/get-started/import-export-data/import-collections) the collection and run it to test the API.
