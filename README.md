# Cities GMT Offset Search Bitwise

This is a simple command-line application written in TypeScript that searches pre-defined cities with a requested GMT offset using bitwise operations.

## Requirements

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- TypeScript (installed as a dev dependency)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:
```bash
npm install
```

## Usage

Start the CLI application
```bash
npm start
```
You will be prompted to enter a number (GMT offset) in the range of -12 to 12.
The program will then output the cities that match the requested GMT offset using bitwise operations.


## Notes

Only numbers from -12 to 12 are accepted. If you enter invalid input (like letters or other digits), the program will ask you to try again.
