const licenseInfo = require('./licenseInfo'); // import license info from my holder file

function renderLicenseBadge(license) {
  if (!license) return '';
  else{
    return `https://img.shields.io/badge/License-${license.replaceAll(' ', '_')}-blue`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
else{ 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
else{
  return licenseInfo.licenseChoice(license);
}
}
function renderTable(boolean) {
  if (boolean == true)
  {
    return`
## Table of Contents 
    
[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)
    
    `
  }

}
// TODO: Create a function to generate markdown for README 
function generateMarkdown({title,description,install, usage, license,credits, contribute, testDetails, github, email, table}) { // deconstructed answers object from the inquirer module
  return `
# ${title}
  

## Description

![alt text](${renderLicenseBadge(license)} )

${description} 
${renderTable(table)}

## Installation

${install}

## Usage

${usage}

## Credits

${credits}

## License


${renderLicenseSection(license)}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) 



## How to Contribute

My github account is [${github}](https://github.com/${github}/),  you can reach me at ${email}

${contribute}

## Tests

${testDetails}

`;
} // I included the badges sections becuase it was included in the example readme from the professional readme guide

module.exports = {generateMarkdown,renderLicenseBadge,renderLicenseLink,renderLicenseSection, renderTable};
